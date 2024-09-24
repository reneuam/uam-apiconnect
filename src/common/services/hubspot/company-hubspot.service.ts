import { Injectable } from '@nestjs/common';
import { Client } from '@hubspot/api-client';
import { CompanyProperties } from 'src/common/constants/hubspot-company-properties';
import { AuthHubspotApiService } from './auth-hubspot.service';

@Injectable()
export class CompanyHubspotApiService {
  constructor(private readonly authService: AuthHubspotApiService) {}

  async findAll(findParams: any): Promise<any> {
    const { access_token: accessToken } = await this.authService.authorize();
    const hubspotClient = new Client({ accessToken });

    const limit = parseInt(process.env.HUBSPOT_API_RECORD_LIMIT);
    const after = findParams.after;
    const properties = CompanyProperties;

    const companies = await hubspotClient.crm.companies.basicApi
      .getPage(limit, after, properties)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.error(err);
      });

    return companies;
  }

  async findOne(id: string): Promise<any> {
    const { access_token: accessToken } = await this.authService.authorize();
    const hubspotClient = new Client({ accessToken });

    const properties = CompanyProperties;

    const company = await hubspotClient.crm.companies.basicApi
      .getById(id, properties)
      .catch((err) => {
        console.error(err);
      });

    return company;
  }
}
