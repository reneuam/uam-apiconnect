import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { HubspotService } from 'src/api/hubspot/hubspot.service';
import { Client } from "@hubspot/api-client";
import { ContactProperties } from 'src/common/constants/hubspot-contact-properties';

@Injectable()
export class ContactService {
  constructor(
    private readonly hubspotService: HubspotService
  ) {}

  create(createContactDto: CreateContactDto) {
    return 'This action adds a new contact';
  }

  async findAll(findParams: any) {
    const { access_token: accessToken } = await this.hubspotService.authorize();
    const hubspotClient = new Client({ accessToken });

    const limit = parseInt(process.env.HUBSPOT_API_RECORD_LIMIT);
    const after = findParams.after;
    const properties = ContactProperties;

    const contacts = await hubspotClient.crm.contacts.basicApi
    .getPage(limit, after, properties)
    .then((data) => {  
      return data;
    })
    .catch((err) => {
        console.error(err);
    });

    return contacts;
  }

  async findOne(id: string) {
    const { access_token: accessToken } = await this.hubspotService.authorize();
    const hubspotClient = new Client({ accessToken });

    const properties = ContactProperties;

    const contact = await hubspotClient.crm.contacts.basicApi.getById(id, properties)
    .catch((err) => {
      console.error(err);
    });
    
    return contact;
  }

  update(id: string, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  remove(id: string) {
    return `This action removes a #${id} contact`;
  }
}
