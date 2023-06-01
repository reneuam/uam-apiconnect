import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyHubspotApiService } from 'src/common/services/hubspot/company-hubspot.service';
import { Company } from './entities/company.entity';
import { parseToDouble, parseToInt } from 'src/common/utils/number-parser';
import { CompanyProperties } from 'src/common/constants/hubspot-company-properties';

@Injectable()
export class CompanyService {
  constructor(
    private readonly companyHubspotApiService: CompanyHubspotApiService,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>
  ) {}
  
  async create(id: string) {
    try {
      const company = await this.companyHubspotApiService.findOne(id);

      if (company) {
        const annualrevenue = parseToDouble(company.properties.annualrevenue);
        const hs_analytics_num_page_views = parseToInt(company.properties.hs_analytics_num_page_views);
        const hs_analytics_num_visits = parseToInt(company.properties.hs_analytics_num_visits);
        const hs_created_by_user_id = parseToInt(company.properties.hs_created_by_user_id);
        const hs_object_id = parseToInt(company.properties.hs_object_id);
        const num_associated_contacts = parseToInt(company.properties.num_associated_contacts);
        const num_associated_deals = parseToInt(company.properties.num_associated_deals);
        const numberofemployees = parseToInt(company.properties.numberofemployees);
        const total_revenue = parseToDouble(company.properties.total_revenue);

        const companyObj = {
          id: company.id,
          ...company.properties,
          annualrevenue,
          hs_analytics_num_page_views,
          hs_analytics_num_visits,
          hs_created_by_user_id,
          hs_object_id,
          num_associated_contacts,
          num_associated_deals,
          numberofemployees,
          total_revenue
        };

        const properties = CompanyProperties;

        const companyFilteredObj = Object.keys(companyObj)
          .filter(key => properties.includes(key))
          .reduce((newObj, key) => {
            newObj[key] = companyObj[key];
            return newObj;
          }, {});

        return await this.companyRepository.save(companyFilteredObj);
      }

      return null;
    } catch (error) {
      console.log('Error', error);
    }
  }

  async bulkCreate(companies: any) {
    try {
      return await Promise.all(
        companies.map((company: any) => {          
          const annualrevenue = parseToDouble(company.properties.annualrevenue);
          const hs_analytics_num_page_views = parseToInt(company.properties.hs_analytics_num_page_views);
          const hs_analytics_num_visits = parseToInt(company.properties.hs_analytics_num_visits);
          const hs_created_by_user_id = parseToInt(company.properties.hs_created_by_user_id);
          const hs_object_id = parseToInt(company.properties.hs_object_id);
          const num_associated_contacts = parseToInt(company.properties.num_associated_contacts);
          const num_associated_deals = parseToInt(company.properties.num_associated_deals);
          const numberofemployees = parseToInt(company.properties.numberofemployees);
          const total_revenue = parseToDouble(company.properties.total_revenue);
          
          const companyObj = {
            id: company.id,
            ...company.properties,
            annualrevenue,
            hs_analytics_num_page_views,
            hs_analytics_num_visits,
            hs_created_by_user_id,
            hs_object_id,
            num_associated_contacts,
            num_associated_deals,
            numberofemployees,
            total_revenue
          };
  
          const properties = CompanyProperties;
  
          const companyFilteredObj = Object.keys(companyObj)
            .filter(key => properties.includes(key))
            .reduce((newObj, key) => {
              newObj[key] = companyObj[key];
              return newObj;
            }, {});
          
          this.companyRepository.save(companyFilteredObj);
        })
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

      (companies.paging?.next.after) ?
        findParams.after = companies.paging.next.after :
        allowToContinue = false;

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
        const annualrevenue = parseToDouble(company.properties.annualrevenue);
        const hs_analytics_num_page_views = parseToInt(company.properties.hs_analytics_num_page_views);
        const hs_analytics_num_visits = parseToInt(company.properties.hs_analytics_num_visits);
        const hs_created_by_user_id = parseToInt(company.properties.hs_created_by_user_id);
        const hs_object_id = parseToInt(company.properties.hs_object_id);
        const num_associated_contacts = parseToInt(company.properties.num_associated_contacts);
        const num_associated_deals = parseToInt(company.properties.num_associated_deals);
        const numberofemployees = parseToInt(company.properties.numberofemployees);
        const total_revenue = parseToDouble(company.properties.total_revenue);

        const companyObj = {
          id: company.id,
          ...company.properties,
          annualrevenue,
          hs_analytics_num_page_views,
          hs_analytics_num_visits,
          hs_created_by_user_id,
          hs_object_id,
          num_associated_contacts,
          num_associated_deals,
          numberofemployees,
          total_revenue
        };

        const properties = CompanyProperties;

        const companyFilteredObj = Object.keys(companyObj)
          .filter(key => properties.includes(key))
          .reduce((newObj, key) => {
            newObj[key] = companyObj[key];
            return newObj;
          }, {});

        return await this.companyRepository.update(id, companyFilteredObj);
      }

      return null;
    } catch (error) {
      console.log('Error', error);
    }
  }

  async remove(id: string) {
    try {
      const company = await this.findOne(id);

      if (company) {
        return await this.companyRepository.delete(id);
      }

      return null;
    } catch (error) {
      console.log('Error', error);
    }
  }
}
