import { Body, Controller, Post, Query } from '@nestjs/common';
import { HubspotSubscriptionType } from 'src/common/constants/hubspot-subscription-type';
import { ContactService } from './contact/contact.service';
import { DealService } from './deal/deal.service';

@Controller('hubspot')
export class HubspotController {
  constructor(
    private readonly contactService: ContactService,
    private readonly dealService: DealService
  ) {}

  @Post()
  async webhook(@Body() body: any) {
    if (body.subscriptionType === HubspotSubscriptionType.contactCreated) {
      this.contactService.create(body);
    }
    if (body.subscriptionType === HubspotSubscriptionType.contactUpdated) {
      this.contactService.update(body);
    }
    if (body.subscriptionType === HubspotSubscriptionType.contactDeleted) {
      this.contactService.remove(body);
    }
    if (body.subscriptionType === HubspotSubscriptionType.dealCreated) {
      this.dealService.create(body);
    }
    if (body.subscriptionType === HubspotSubscriptionType.dealUpdated) {
      this.dealService.update(body);
    }
    if (body.subscriptionType === HubspotSubscriptionType.dealDeleted) {
      this.dealService.remove(body);
    }
  }
}
