import { Module, forwardRef } from '@nestjs/common';
import { DealService } from './deal.service';
import { DealController } from './deal.controller';
import { HubspotModule } from '../hubspot.module';

@Module({
  imports: [forwardRef(() => HubspotModule)],
  controllers: [DealController],
  providers: [DealService]
})
export class DealModule {}
