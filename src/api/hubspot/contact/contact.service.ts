import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactHubspotApiService } from 'src/common/services/hubspot/contact-hubspot.service';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactService {
  constructor(
    private readonly contactHubspotApiService: ContactHubspotApiService,
    @InjectRepository(Contact)
    private readonly balanceRepository: Repository<Contact>
  ) {}

  create(createContactDto: CreateContactDto) {
    return 'This action adds a new contact';
  }

  async bulkCreate(contacts: any) {
    const createdContacts = await Promise.all(
      contacts.map((contact: any) => console.log())
    );
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

  async findAll(findParams: any) {
    return await this.contactHubspotApiService.findAll(findParams);
  }

  async findOne(id: string) {
    return await this.contactHubspotApiService.findOne(id);
  }

  update(id: string, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  remove(id: string) {
    return `This action removes a #${id} contact`;
  }
}
