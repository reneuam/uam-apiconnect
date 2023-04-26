import { Module } from '@nestjs/common';
import { AuthHubspotApiService } from './auth-hubspot.service';
import { ContactHubspotApiService } from './contact-hubspot.service';
import { DealHubspotApiService } from './deal-hubspot.service';

@Module({
  providers: [AuthHubspotApiService, ContactHubspotApiService, DealHubspotApiService],
  exports: [AuthHubspotApiService, ContactHubspotApiService, DealHubspotApiService]
})
export class ApiHubspotModule {}
