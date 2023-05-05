import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactHubspotApiService } from 'src/common/services/hubspot/contact-hubspot.service';
import { Contact } from './entities/contact.entity';
import { parseToDouble, parseToInt } from 'src/common/utils/number-parser';
import { ContactProperties } from 'src/common/constants/hubspot-contact-properties';

@Injectable()
export class ContactService {
  constructor(
    private readonly contactHubspotApiService: ContactHubspotApiService,
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>
  ) {}

  async create(id: string) {
    try {
      const contact = await this.contactHubspotApiService.findOne(id);

      if (contact) {
        const annualrevenue = parseToDouble(contact.properties.annualrevenue);
        const hs_time_between_contact_creation_and_deal_close = parseToInt(contact.properties.hs_time_between_contact_creation_and_deal_close);
        const hs_time_between_contact_creation_and_deal_creation = parseToInt(contact.properties.hs_time_between_contact_creation_and_deal_creation);
        const hs_time_in_customer = parseToInt(contact.properties.hs_time_in_customer);
        const hs_time_in_evangelist = parseToInt(contact.properties.hs_time_in_evangelist);
        const hs_time_in_lead = parseToInt(contact.properties.hs_time_in_lead);
        const hs_time_in_marketingqualifiedlead = parseToInt(contact.properties.hs_time_in_marketingqualifiedlead);
        const hs_time_in_opportunity = parseToInt(contact.properties.hs_time_in_opportunity);
        const hs_time_in_other = parseToInt(contact.properties.hs_time_in_other);
        const hs_time_in_salesqualifiedlead = parseToInt(contact.properties.hs_time_in_salesqualifiedlead);
        const hs_time_in_subscriber = parseToInt(contact.properties.hs_time_in_subscriber);
        const hs_time_to_first_engagement = parseToInt(contact.properties.hs_time_to_first_engagement);
        const hs_time_to_move_from_lead_to_customer = parseToInt(contact.properties.hs_time_to_move_from_lead_to_customer);
        const hs_time_to_move_from_marketingqualifiedlead_to_customer = parseToInt(contact.properties.hs_time_to_move_from_marketingqualifiedlead_to_customer);
        const hs_time_to_move_from_opportunity_to_customer = parseToInt(contact.properties.hs_time_to_move_from_opportunity_to_customer);
        const hs_time_to_move_from_salesqualifiedlead_to_customer = parseToInt(contact.properties.hs_time_to_move_from_salesqualifiedlead_to_customer);
        const hs_time_to_move_from_subscriber_to_customer = parseToInt(contact.properties.hs_time_to_move_from_subscriber_to_customer);
        const recent_deal_amount = parseToDouble(contact.properties.recent_deal_amount);
        const total_revenue = parseToDouble(contact.properties.total_revenue);

        const contactObj = {
          id: contact.id,
          ...contact.properties,
          annualrevenue,
          hs_time_between_contact_creation_and_deal_close,
          hs_time_between_contact_creation_and_deal_creation,
          hs_time_in_customer,
          hs_time_in_evangelist,
          hs_time_in_lead,
          hs_time_in_marketingqualifiedlead,
          hs_time_in_opportunity,
          hs_time_in_other,
          hs_time_in_salesqualifiedlead,
          hs_time_in_subscriber,
          hs_time_to_first_engagement,
          hs_time_to_move_from_lead_to_customer,
          hs_time_to_move_from_marketingqualifiedlead_to_customer,
          hs_time_to_move_from_opportunity_to_customer,
          hs_time_to_move_from_salesqualifiedlead_to_customer,
          hs_time_to_move_from_subscriber_to_customer,
          recent_deal_amount,
          total_revenue
        };

        const properties = ContactProperties;

        const contactFilteredObj = Object.keys(contactObj)
          .filter(key => properties.includes(key))
          .reduce((newObj, key) => {
            newObj[key] = contactObj[key];
            return newObj;
          }, {});

        return await this.contactRepository.save(contactFilteredObj);
      }

      return null;
    } catch (error) {
      console.log('Error', error);
    }
  }

  async bulkCreate(contacts: any) {
    try {
      return await Promise.all(
        contacts.map((contact: any) => {        
          const annualrevenue = parseToDouble(contact.properties.annualrevenue);
          const hs_time_between_contact_creation_and_deal_close = parseToInt(contact.properties.hs_time_between_contact_creation_and_deal_close);
          const hs_time_between_contact_creation_and_deal_creation = parseToInt(contact.properties.hs_time_between_contact_creation_and_deal_creation);
          const hs_time_in_customer = parseToInt(contact.properties.hs_time_in_customer);
          const hs_time_in_evangelist = parseToInt(contact.properties.hs_time_in_evangelist);
          const hs_time_in_lead = parseToInt(contact.properties.hs_time_in_lead);
          const hs_time_in_marketingqualifiedlead = parseToInt(contact.properties.hs_time_in_marketingqualifiedlead);
          const hs_time_in_opportunity = parseToInt(contact.properties.hs_time_in_opportunity);
          const hs_time_in_other = parseToInt(contact.properties.hs_time_in_other);
          const hs_time_in_salesqualifiedlead = parseToInt(contact.properties.hs_time_in_salesqualifiedlead);
          const hs_time_in_subscriber = parseToInt(contact.properties.hs_time_in_subscriber);
          const hs_time_to_first_engagement = parseToInt(contact.properties.hs_time_to_first_engagement);
          const hs_time_to_move_from_lead_to_customer = parseToInt(contact.properties.hs_time_to_move_from_lead_to_customer);
          const hs_time_to_move_from_marketingqualifiedlead_to_customer = parseToInt(contact.properties.hs_time_to_move_from_marketingqualifiedlead_to_customer);
          const hs_time_to_move_from_opportunity_to_customer = parseToInt(contact.properties.hs_time_to_move_from_opportunity_to_customer);
          const hs_time_to_move_from_salesqualifiedlead_to_customer = parseToInt(contact.properties.hs_time_to_move_from_salesqualifiedlead_to_customer);
          const hs_time_to_move_from_subscriber_to_customer = parseToInt(contact.properties.hs_time_to_move_from_subscriber_to_customer);
          const recent_deal_amount = parseToDouble(contact.properties.recent_deal_amount);
          const total_revenue = parseToDouble(contact.properties.total_revenue);
          
          const contactObj = {
            id: contact.id,
            ...contact.properties,
            annualrevenue,
            hs_time_between_contact_creation_and_deal_close,
            hs_time_between_contact_creation_and_deal_creation,
            hs_time_in_customer,
            hs_time_in_evangelist,
            hs_time_in_lead,
            hs_time_in_marketingqualifiedlead,
            hs_time_in_opportunity,
            hs_time_in_other,
            hs_time_in_salesqualifiedlead,
            hs_time_in_subscriber,
            hs_time_to_first_engagement,
            hs_time_to_move_from_lead_to_customer,
            hs_time_to_move_from_marketingqualifiedlead_to_customer,
            hs_time_to_move_from_opportunity_to_customer,
            hs_time_to_move_from_salesqualifiedlead_to_customer,
            hs_time_to_move_from_subscriber_to_customer,
            recent_deal_amount,
            total_revenue
          };
  
          const properties = ContactProperties;
  
          const contactFilteredObj = Object.keys(contactObj)
            .filter(key => properties.includes(key))
            .reduce((newObj, key) => {
              newObj[key] = contactObj[key];
              return newObj;
            }, {});
          
          this.contactRepository.save(contactFilteredObj);
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
      const contacts = await this.contactHubspotApiService.findAll(findParams);
      
      (contacts.paging?.next.after) ?
        findParams.after = contacts.paging.next.after :
        allowToContinue = false;

      await this.bulkCreate(contacts.results);
    }
  }

  async findAll() {
    return await this.contactRepository.find();
  }

  async findOne(id: string) {
    return await this.contactRepository.findOneBy({ id });
  }

  async update(id: string) {
    try {
      const contact = await this.contactHubspotApiService.findOne(id);

      if (contact) {
        const annualrevenue = parseToDouble(contact.properties.annualrevenue);
        const hs_time_between_contact_creation_and_deal_close = parseToInt(contact.properties.hs_time_between_contact_creation_and_deal_close);
        const hs_time_between_contact_creation_and_deal_creation = parseToInt(contact.properties.hs_time_between_contact_creation_and_deal_creation);
        const hs_time_in_customer = parseToInt(contact.properties.hs_time_in_customer);
        const hs_time_in_evangelist = parseToInt(contact.properties.hs_time_in_evangelist);
        const hs_time_in_lead = parseToInt(contact.properties.hs_time_in_lead);
        const hs_time_in_marketingqualifiedlead = parseToInt(contact.properties.hs_time_in_marketingqualifiedlead);
        const hs_time_in_opportunity = parseToInt(contact.properties.hs_time_in_opportunity);
        const hs_time_in_other = parseToInt(contact.properties.hs_time_in_other);
        const hs_time_in_salesqualifiedlead = parseToInt(contact.properties.hs_time_in_salesqualifiedlead);
        const hs_time_in_subscriber = parseToInt(contact.properties.hs_time_in_subscriber);
        const hs_time_to_first_engagement = parseToInt(contact.properties.hs_time_to_first_engagement);
        const hs_time_to_move_from_lead_to_customer = parseToInt(contact.properties.hs_time_to_move_from_lead_to_customer);
        const hs_time_to_move_from_marketingqualifiedlead_to_customer = parseToInt(contact.properties.hs_time_to_move_from_marketingqualifiedlead_to_customer);
        const hs_time_to_move_from_opportunity_to_customer = parseToInt(contact.properties.hs_time_to_move_from_opportunity_to_customer);
        const hs_time_to_move_from_salesqualifiedlead_to_customer = parseToInt(contact.properties.hs_time_to_move_from_salesqualifiedlead_to_customer);
        const hs_time_to_move_from_subscriber_to_customer = parseToInt(contact.properties.hs_time_to_move_from_subscriber_to_customer);
        const recent_deal_amount = parseToDouble(contact.properties.recent_deal_amount);
        const total_revenue = parseToDouble(contact.properties.total_revenue);

        const contactObj = {
          id: contact.id,
          ...contact.properties,
          annualrevenue,
          hs_time_between_contact_creation_and_deal_close,
          hs_time_between_contact_creation_and_deal_creation,
          hs_time_in_customer,
          hs_time_in_evangelist,
          hs_time_in_lead,
          hs_time_in_marketingqualifiedlead,
          hs_time_in_opportunity,
          hs_time_in_other,
          hs_time_in_salesqualifiedlead,
          hs_time_in_subscriber,
          hs_time_to_first_engagement,
          hs_time_to_move_from_lead_to_customer,
          hs_time_to_move_from_marketingqualifiedlead_to_customer,
          hs_time_to_move_from_opportunity_to_customer,
          hs_time_to_move_from_salesqualifiedlead_to_customer,
          hs_time_to_move_from_subscriber_to_customer,
          recent_deal_amount,
          total_revenue
        };

        const properties = ContactProperties;

        const contactFilteredObj = Object.keys(contactObj)
          .filter(key => properties.includes(key))
          .reduce((newObj, key) => {
            newObj[key] = contactObj[key];
            return newObj;
          }, {});

        return await this.contactRepository.update(id, contactFilteredObj);
      }

      return null;
    } catch (error) {
      console.log('Error', error);
    }
  }

  async remove(id: string) {
    try {
      const contact = await this.findOne(id);

      if (contact) {
        return await this.contactRepository.delete(id);
      }

      return null;
    } catch (error) {
      console.log('Error', error);
    }
  }
}
