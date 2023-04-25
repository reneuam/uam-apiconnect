import { Injectable } from '@nestjs/common';
import { Client } from "@hubspot/api-client";
import { DealProperties } from 'src/common/constants/hubspot-deal-properties';
import { AuthHubspotApiService } from './auth-hubspot.service';

@Injectable()
export class DealHubspotApiService {
  constructor(private readonly authService: AuthHubspotApiService) {}

  async findAll(findParams: any): Promise<any> {
    const { access_token: accessToken } = await this.authService.authorize();
    const hubspotClient = new Client({ accessToken });

    const limit = parseInt(process.env.HUBSPOT_API_RECORD_LIMIT);
    const after = findParams.after;
    const properties = DealProperties;

    const contacts = await hubspotClient.crm.deals.basicApi
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

    const properties = DealProperties;

    const deal = await hubspotClient.crm.deals.basicApi.getById(id, properties)
    .catch((err) => {
      console.error(err);
    });
    
    return deal;
  }
}
