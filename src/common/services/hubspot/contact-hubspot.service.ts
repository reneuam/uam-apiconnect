import { Injectable } from '@nestjs/common';
import { Client } from "@hubspot/api-client";
import { ContactProperties } from 'src/common/constants/hubspot-contact-properties';
import { AuthHubspotService } from './auth-hubspot.service';

@Injectable()
export class ContactHubspotService {
  constructor(private readonly authService: AuthHubspotService) {}

  async findAll(findParams: any): Promise<any> {
    const { access_token: accessToken } = await this.authService.authorize();
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

  async findOne(id: string) : Promise<any> {
    const { access_token: accessToken } = await this.authService.authorize();
    const hubspotClient = new Client({ accessToken });

    const properties = ContactProperties;

    const contact = await hubspotClient.crm.contacts.basicApi.getById(id, properties)
    .catch((err) => {
      console.error(err);
    });
    
    return contact;
  }
}
