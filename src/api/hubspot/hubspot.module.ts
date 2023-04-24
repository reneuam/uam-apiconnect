import { Module } from '@nestjs/common';
import { HubspotService } from './hubspot.service';
import { ContactModule } from './contact/contact.module';
import { DealModule } from './deal/deal.module';

@Module({
  imports: [ContactModule, DealModule],
  providers: [HubspotService],
  exports: [HubspotService]
})
export class HubspotModule {}
