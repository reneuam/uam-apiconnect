import { Body, Controller, Post } from '@nestjs/common';
import { HubspotSubscriptionType } from 'src/common/constants/hubspot-subscription-type';
import { ContactService } from './contact/contact.service';
import { DealService } from './deal/deal.service';
import { TicketService } from './ticket/ticket.service';

@Controller('hubspot')
export class HubspotController {
  constructor(
    private readonly contactService: ContactService,
    private readonly dealService: DealService,
    private readonly ticketService: TicketService
  ) {}

  @Post()
  async webhook(@Body() events: any) {
    events.forEach(event => {
      const subscriptionType = event.subscriptionType;
      const objectId = event.objectId;

      if (subscriptionType === HubspotSubscriptionType.contactCreated) {
        this.contactService.create(objectId.toString());
      }
      if (subscriptionType === HubspotSubscriptionType.contactUpdated) {
        this.contactService.update(objectId.toString());
      }
      if (subscriptionType === HubspotSubscriptionType.contactDeleted) {
        this.contactService.remove(objectId.toString());
      }
      if (subscriptionType === HubspotSubscriptionType.contactRestored) {
        this.contactService.create(objectId.toString());
      }
      if (subscriptionType === HubspotSubscriptionType.dealCreated) {
        this.dealService.create(objectId.toString());
      }
      if (subscriptionType === HubspotSubscriptionType.dealUpdated) {
        this.dealService.update(objectId.toString());
      }
      if (subscriptionType === HubspotSubscriptionType.dealDeleted) {
        this.dealService.remove(objectId.toString());
      }
      if (subscriptionType === HubspotSubscriptionType.dealRestored) {
        this.dealService.create(objectId.toString());
      }
      if (subscriptionType === HubspotSubscriptionType.ticketCreated) {
        this.ticketService.create(objectId.toString());
      }
      if (subscriptionType === HubspotSubscriptionType.ticketUpdated) {
        this.ticketService.update(objectId.toString());
      }
      if (subscriptionType === HubspotSubscriptionType.ticketDeleted) {
        this.ticketService.remove(objectId.toString());
      }
      if (subscriptionType === HubspotSubscriptionType.ticketRestored) {
        this.ticketService.create(objectId.toString());
      }
    });
  }
}
