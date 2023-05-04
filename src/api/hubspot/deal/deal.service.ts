import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DealHubspotApiService } from 'src/common/services/hubspot/deal-hubspot.service';
import { Deal } from './entities/deal.entity';
import { parseToDouble, parseToInt } from 'src/common/utils/number-parser';
import { DealProperties } from 'src/common/constants/hubspot-deal-properties';
import { boolStringToInt } from 'src/common/utils/bool-string-parser';

@Injectable()
export class DealService {
  constructor(
    private readonly dealHubspotApiService: DealHubspotApiService,
    @InjectRepository(Deal)
    private readonly dealRepository: Repository<Deal>
  ) {}

  async create(id: string) {
    console.log('Create deal id', id);
    const deal = await this.dealHubspotApiService.findOne(id);

    if (deal) {
      const agent_acount = parseToInt(deal.properties.agent_acount);
      const amount = parseToDouble(deal.properties.amount);
      const amount_in_home_currency = parseToDouble(deal.properties.amount_in_home_currency);
      const contract_value = parseToDouble(deal.properties.contract_value);
      const headcount_needed = parseToInt(deal.properties.headcount_needed);        
      const hs_is_closed_won = boolStringToInt(deal.properties.hs_is_closed_won);
      const paid = boolStringToInt(deal.properties.paid);
      const price_per_hour = parseToDouble(deal.properties.price_per_hour);
      const reactivation = boolStringToInt(deal.properties.reactivation);
      const sales_cycle = parseToInt(deal.properties.sales_cycle);

      const dealObj = {
        id: deal.id,
        ...deal.properties,
        agent_acount,
        amount,
        amount_in_home_currency,
        contract_value,
        headcount_needed,
        hs_is_closed_won,
        paid,
        price_per_hour,
        reactivation,
        sales_cycle
      };
      
      const properties = DealProperties;

      const dealFilteredObj = Object.keys(dealObj)
        .filter(key => properties.includes(key))
        .reduce((newObj, key) => {
          newObj[key] = dealObj[key];
          return newObj;
        }, {});

      return await this.dealRepository.save(dealFilteredObj);
    }

    return null;
  }

  async bulkCreate(deals: any) {
    return await Promise.all(
      deals.map((deal: any) => {        
        const agent_acount = parseToInt(deal.properties.agent_acount);
        const amount = parseToDouble(deal.properties.amount);
        const amount_in_home_currency = parseToDouble(deal.properties.amount_in_home_currency);
        const contract_value = parseToDouble(deal.properties.contract_value);
        const headcount_needed = parseToInt(deal.properties.headcount_needed);        
        const hs_is_closed_won = boolStringToInt(deal.properties.hs_is_closed_won);
        const paid = boolStringToInt(deal.properties.paid);
        const price_per_hour = parseToDouble(deal.properties.price_per_hour);
        const reactivation = boolStringToInt(deal.properties.reactivation);
        const sales_cycle = parseToInt(deal.properties.sales_cycle);

        const dealObj = {
          id: deal.id,
          ...deal.properties,
          agent_acount,
          amount,
          amount_in_home_currency,
          contract_value,
          headcount_needed,
          hs_is_closed_won,
          paid,
          price_per_hour,
          reactivation,
          sales_cycle
        };

        const properties = DealProperties;

        const dealFilteredObj = Object.keys(dealObj)
          .filter(key => properties.includes(key))
          .reduce((newObj, key) => {
            newObj[key] = dealObj[key];
            return newObj;
          }, {});

        this.dealRepository.save(dealFilteredObj);
      })
    );
  }

  async migrate() {
    let findParams = { after: undefined };
    let allowToContinue = true;

    while (allowToContinue) {
      const deals = await this.dealHubspotApiService.findAll(findParams);

      (deals.paging?.next.after) ?
        findParams.after = deals.paging.next.after :
        allowToContinue = false;

      await this.bulkCreate(deals.results);
    }
  }

  async findAll() {
    return await this.dealRepository.find();
  }

  async findOne(id: string) {
    return await this.dealRepository.findOneBy({ id });
  }

  async update(id: string) {
    console.log('update deal id', id);
    const deal = await this.dealHubspotApiService.findOne(id);

    if (deal) {
      const agent_acount = parseToInt(deal.properties.agent_acount);
      const amount = parseToDouble(deal.properties.amount);
      const amount_in_home_currency = parseToDouble(deal.properties.amount_in_home_currency);
      const contract_value = parseToDouble(deal.properties.contract_value);
      const headcount_needed = parseToInt(deal.properties.headcount_needed);        
      const hs_is_closed_won = boolStringToInt(deal.properties.hs_is_closed_won);
      const paid = boolStringToInt(deal.properties.paid);
      const price_per_hour = parseToDouble(deal.properties.price_per_hour);
      const reactivation = boolStringToInt(deal.properties.reactivation);
      const sales_cycle = parseToInt(deal.properties.sales_cycle);

      const dealObj = {
        id: deal.id,
        ...deal.properties,
        agent_acount,
        amount,
        amount_in_home_currency,
        contract_value,
        headcount_needed,
        hs_is_closed_won,
        paid,
        price_per_hour,
        reactivation,
        sales_cycle
      };

      const properties = DealProperties;

      const dealFilteredObj = Object.keys(dealObj)
        .filter(key => properties.includes(key))
        .reduce((newObj, key) => {
          newObj[key] = dealObj[key];
          return newObj;
        }, {});

      return await this.dealRepository.update(id, dealFilteredObj);
    }

    return null;
  }

  async remove(id: string) {
    console.log('Remove deal id', id);
    
    const deal = await this.findOne(id);

    if (deal) {
      return await this.dealRepository.delete(id);
    }

    return null;
  }
}
