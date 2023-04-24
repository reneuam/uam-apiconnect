import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DealService } from './deal.service';
import { CreateDealDto } from './dto/create-deal.dto';
import { UpdateDealDto } from './dto/update-deal.dto';

@Controller({ path: 'hubspot/deals', version: '1' })
export class DealController {
  constructor(private readonly dealService: DealService) {}

  @Post()
  create(@Body() createDealDto: CreateDealDto) {
    return this.dealService.create(createDealDto);
  }

  @Get()
  findAll(@Query() queryParams) {
    const after = (queryParams.after) ? queryParams.after : undefined;
    const findParams = { after };

    return this.dealService.findAll(findParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dealService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDealDto: UpdateDealDto) {
    return this.dealService.update(id, updateDealDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dealService.remove(id);
  }
}
