import { Module } from '@nestjs/common';
import { HubspotService } from './hubspot.service';
import { ContactModule } from './contact/contact.module';
import { DealModule } from './deal/deal.module';
import { HubspotController } from './hubspot.controller';
import { TicketModule } from './ticket/ticket.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [ContactModule, DealModule, TicketModule, CompanyModule],
  providers: [HubspotService],
  exports: [HubspotService],
  controllers: [HubspotController]
})
export class HubspotModule {}
