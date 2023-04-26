import { Injectable } from '@nestjs/common';
import { CreateDealDto } from './dto/create-deal.dto';
import { UpdateDealDto } from './dto/update-deal.dto';
import { DealHubspotApiService } from 'src/common/services/hubspot/deal-hubspot.service';

@Injectable()
export class DealService {
  constructor(
    private readonly dealHubspotApiService: DealHubspotApiService
  ) {}

  create(createDealDto: CreateDealDto) {
    return 'This action adds a new deal';
  }

  async bulkCreate(deals: any) {
    const createdDeals = await Promise.all(
      deals.map((deal: any) => console.log())
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

  async findAll(findParams: any) {
    return await this.dealHubspotApiService.findAll(findParams);
  }

  async findOne(id: string) {
    return await this.dealHubspotApiService.findOne(id);
  }

  update(id: string, updateDealDto: UpdateDealDto) {
    return `This action updates a #${id} deal`;
  }

  remove(id: string) {
    return `This action removes a #${id} deal`;
  }
}
