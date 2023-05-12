import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiHubspotModule } from 'src/common/services/hubspot/api-hubspot.module';
import { HubspotModule } from '../hubspot.module';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { Ticket } from './entities/ticket.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ticket]),
    ApiHubspotModule,
    forwardRef(() => HubspotModule)
  ],
  controllers: [TicketController],
  providers: [TicketService],
  exports: [TicketService]
})
export class TicketModule {}
