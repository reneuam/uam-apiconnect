import { Module, forwardRef } from '@nestjs/common';
import { DealService } from './deal.service';
import { DealController } from './deal.controller';
import { HubspotModule } from '../hubspot.module';
import { ApiHubspotModule } from 'src/common/services/hubspot/api-hubspot.module';

@Module({
  imports: [ApiHubspotModule, forwardRef(() => HubspotModule)],
  controllers: [DealController],
  providers: [DealService]
})
export class DealModule {}
