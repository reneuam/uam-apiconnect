import { Module } from '@nestjs/common';
import { HubspotService } from './hubspot.service';
import { CompanyModule } from './company/company.module';
import { ContactModule } from './contact/contact.module';
import { DealModule } from './deal/deal.module';
import { HubspotController } from './hubspot.controller';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [CompanyModule, ContactModule, DealModule, TicketModule],
  providers: [HubspotService],
  exports: [HubspotService],
  controllers: [HubspotController]
})
export class HubspotModule {}
