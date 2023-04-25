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
