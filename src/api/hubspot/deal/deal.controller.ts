import { Controller, Get, Param, Query } from '@nestjs/common';
import { DealService } from './deal.service';

@Controller({ path: 'hubspot/deals', version: '1' })
export class DealController {
  constructor(private readonly dealService: DealService) {}

  @Get()
  findAll(@Query() queryParams) {
    const after = (queryParams.after) ? queryParams.after : undefined;
    const findParams = { after };

    return this.dealService.migrate();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dealService.findOne(id);
  }
}
