import { Module } from '@nestjs/common';
import { AuthHubspotApiService } from './auth-hubspot.service';
import { ContactHubspotApiService } from './contact-hubspot.service';
import { DealHubspotApiService } from './deal-hubspot.service';
import { TicketHubspotApiService } from './ticket-hubspot.service';

@Module({
  providers: [AuthHubspotApiService, ContactHubspotApiService, DealHubspotApiService, TicketHubspotApiService],
  exports: [AuthHubspotApiService, ContactHubspotApiService, DealHubspotApiService, TicketHubspotApiService]
})
export class ApiHubspotModule {}
