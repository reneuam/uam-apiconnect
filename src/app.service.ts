import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ContactService } from './api/hubspot/contact/contact.service';
import { DealService } from './api/hubspot/deal/deal.service';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(
    private readonly contactService: ContactService,
    private readonly dealService: DealService
  ) {}

  async onApplicationBootstrap() {
    const contacts = await this.contactService.findAll();
    const deals = await this.dealService.findAll();
    
    if (contacts.length === 0) {
      await this.contactService.migrate();
    }

    if (deals.length === 0) {
      await this.dealService.migrate();
    }
  }
}
