import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactHubspotService } from 'src/common/services/hubspot/contact-hubspot.service';

@Injectable()
export class ContactService {
  constructor(
    private readonly contactHubspotService: ContactHubspotService
  ) {}

  create(createContactDto: CreateContactDto) {
    return 'This action adds a new contact';
  }

  async findAll(findParams: any) {
    return await this.contactHubspotService.findAll(findParams);
  }

  async findOne(id: string) {
    return await this.contactHubspotService.findOne(id);
  }

  update(id: string, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  remove(id: string) {
    return `This action removes a #${id} contact`;
  }
}
