import { Injectable } from '@nestjs/common';
import { CreateDealDto } from './dto/create-deal.dto';
import { UpdateDealDto } from './dto/update-deal.dto';
import { HubspotService } from 'src/api/hubspot/hubspot.service';
import { Client } from "@hubspot/api-client";
import { DealProperties } from 'src/common/constants/hubspot-deal-properties';

@Injectable()
export class DealService {
  constructor(
    private readonly hubspotService: HubspotService
  ) {}

  create(createDealDto: CreateDealDto) {
    return 'This action adds a new deal';
  }

  async findAll() {
    const { access_token: accessToken } = await this.hubspotService.authorize();
    const hubspotClient = new Client({ accessToken });

    const limit = 100;
    const after = undefined;
    const properties = DealProperties;

    const deals = await hubspotClient.crm.deals.basicApi
    .getPage(limit, undefined, properties)
    .then((deals) => {
      return deals;
    })
    .catch((err) => {
        console.error(err);
    });

    return deals;
  }

  async findOne(id: string) {
    const { access_token: accessToken } = await this.hubspotService.authorize();
    const hubspotClient = new Client({ accessToken });

    const properties = DealProperties;

    const deal = await hubspotClient.crm.deals.basicApi.getById(id, properties)
    .catch((err) => {
      console.error(err);
    });
    
    return deal;
  }

  update(id: string, updateDealDto: UpdateDealDto) {
    return `This action updates a #${id} deal`;
  }

  remove(id: string) {
    return `This action removes a #${id} deal`;
  }
}
