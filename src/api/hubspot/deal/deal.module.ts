import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DealService } from './deal.service';
import { DealController } from './deal.controller';
import { HubspotModule } from '../hubspot.module';
import { ApiHubspotModule } from 'src/common/services/hubspot/api-hubspot.module';
import { Deal } from './entities/deal.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Deal]),
    ApiHubspotModule,
    forwardRef(() => HubspotModule)
  ],
  controllers: [DealController],
  providers: [DealService]
})
export class DealModule {}
