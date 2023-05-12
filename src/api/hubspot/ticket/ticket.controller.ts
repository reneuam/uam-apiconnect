import { Controller, Get, Param, Query } from '@nestjs/common';
import { TicketService } from './ticket.service';

@Controller({ path: 'hubspot/tickets', version: '1' })
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get()
  findAll(@Query() queryParams) {
    const after = (queryParams.after) ? queryParams.after : undefined;
    const findParams = { after };

    return this.ticketService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.ticketService.findOne(id);
  }
}
