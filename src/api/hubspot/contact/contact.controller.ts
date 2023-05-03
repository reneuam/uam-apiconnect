import { Controller, Get, Param, Query } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller({ path: 'hubspot/contacts', version: '1' })
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  findAll(@Query() queryParams) {
    const after = (queryParams.after) ? queryParams.after : undefined;
    const findParams = { after };

    return this.contactService.migrate();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(id);
  }
}
