import { Module } from '@nestjs/common';
import { HubspotService } from './hubspot.service';
import { ContactModule } from './contact/contact.module';
import { DealModule } from './deal/deal.module';
import { HubspotController } from './hubspot.controller';

@Module({
  imports: [ContactModule, DealModule],
  providers: [HubspotService],
  exports: [HubspotService],
  controllers: [HubspotController]
})
export class HubspotModule {}
