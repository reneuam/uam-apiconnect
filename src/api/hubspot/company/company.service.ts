import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyHubspotApiService } from 'src/common/services/hubspot/company-hubspot.service';
import { Company } from './entities/company.entity';
import { CompanyProperties } from 'src/common/constants/hubspot-company-properties';

@Injectable()
export class CompanyService {
  constructor(
    private readonly companyHubspotApiService: CompanyHubspotApiService,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async create(id: string) {
    try {
      const company = await this.companyHubspotApiService.findOne(id);

      if (company) {
        const companyObj = {
          id: company.id,
          ...company.properties,
        };

        const properties = CompanyProperties;

        const companyFilteredObj = Object.keys(companyObj)
          .filter((key) => properties.includes(key))
          .reduce((newObj, key) => {
            newObj[key] = companyObj[key];
            return newObj;
          }, {});

        return await this.companyRepository.save(companyFilteredObj);
      }
    } catch (error) {
      console.log('Error', error);
    }
  }

  async bulkCreate(companies: any) {
    try {
      return await Promise.all(
        companies.map((company: any) => {
          const companyObj = {
            id: company.id,
            ...company.properties,
          };

          const properties = CompanyProperties;

          const companyFilteredObj = Object.keys(companyObj)
            .filter((key) => properties.includes(key))
            .reduce((newObj, key) => {
              newObj[key] = companyObj[key];
              return newObj;
            }, {});

          this.companyRepository.save(companyFilteredObj);
        }),
      );
    } catch (error) {
      console.log('Error:', error);
    }
  }

  async migrate() {
    let findParams = { after: undefined };
    let allowToContinue = true;

    while (allowToContinue) {
      const companies = await this.companyHubspotApiService.findAll(findParams);

      companies.paging?.next.after
        ? (findParams.after = companies.paging.next.after)
        : (allowToContinue = false);

      await this.bulkCreate(companies.results);
    }
  }

  async findAll() {
    return await this.companyRepository.find();
  }

  async findOne(id: string) {
    return await this.companyRepository.findOneBy({ id });
  }

  async update(id: string) {
    try {
      const company = await this.companyHubspotApiService.findOne(id);

      if (company) {
        const companyObj = {
          id: company.id,
          ...company.properties,
        };

        const properties = CompanyProperties;

        const companyFilteredObj = Object.keys(companyObj)
          .filter((key) => properties.includes(key))
          .reduce((newObj, key) => {
            newObj[key] = companyObj[key];
            return newObj;
          }, {});

        return await this.companyRepository.update(id, companyFilteredObj);
      }
    } catch (error) {
      console.log('Error', error);
    }
  }

  async remove(id: string) {
    try {
      const company = await this.findOne(id);

      if (company) {
        return this.companyRepository.delete(id);
      }

      return null;
    } catch (error) {
      console.log('Error', error);
    }
  }
}
