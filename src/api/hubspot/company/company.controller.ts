import { Controller, Get, Param, Query } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller({ path: 'hubspot/companies', version: '1' })
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  findAll(@Query() queryParams) {
    const after = queryParams.after ? queryParams.after : undefined;
    const findParams = { after };

    return this.companyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }
}
