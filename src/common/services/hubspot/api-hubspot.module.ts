import { Module } from '@nestjs/common';
import { AuthHubspotService } from './auth-hubspot.service';
import { ContactHubspotService } from './contact-hubspot.service';
import { DealHubspotService } from './deal-hubspot.service';

@Module({
  providers: [AuthHubspotService, ContactHubspotService, DealHubspotService],
  exports: [AuthHubspotService, ContactHubspotService, DealHubspotService]
})
export class ApiHubspotModule {}
