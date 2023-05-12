import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ContactService } from './api/hubspot/contact/contact.service';
import { DealService } from './api/hubspot/deal/deal.service';
import { TicketService } from './api/hubspot/ticket/ticket.service';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(
    private readonly contactService: ContactService,
    private readonly dealService: DealService,
    private readonly ticketService: TicketService
  ) {}

  async onApplicationBootstrap() {
    const contacts = await this.contactService.findAll();
    const deals = await this.dealService.findAll();
    const tickets = await this.ticketService.findAll();
    
    if (contacts.length === 0) {
      await this.contactService.migrate();
    }

    if (deals.length === 0) {
      await this.dealService.migrate();
    }

    if (tickets.length === 0) {
      await this.ticketService.migrate();
    }
  }
}
