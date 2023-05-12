import { Injectable } from '@nestjs/common';
import { Client } from "@hubspot/api-client";
import { TicketProperties } from 'src/common/constants/hubspot-ticket-properties';
import { AuthHubspotApiService } from './auth-hubspot.service';

@Injectable()
export class TicketHubspotApiService {
  constructor(private readonly authService: AuthHubspotApiService) {}

  async findAll(findParams: any): Promise<any> {
    const { access_token: accessToken } = await this.authService.authorize();
    const hubspotClient = new Client({ accessToken });

    const limit = parseInt(process.env.HUBSPOT_API_RECORD_LIMIT);
    const after = findParams.after;
    const properties = TicketProperties;

    const tickets = await hubspotClient.crm.tickets.basicApi
    .getPage(limit, after, properties)
    .then((data) => {  
      return data;
    })
    .catch((err) => {
        console.error(err);
    });

    return tickets;
  }

  async findOne(id: string) : Promise<any> {
    const { access_token: accessToken } = await this.authService.authorize();
    const hubspotClient = new Client({ accessToken });

    const properties = TicketProperties;

    const ticket = await hubspotClient.crm.tickets.basicApi.getById(id, properties)
    .catch((err) => {
      console.error(err);
    });
    
    return ticket;
  }
}
