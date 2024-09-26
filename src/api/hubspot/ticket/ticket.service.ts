import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketProperties } from 'src/common/constants/hubspot-ticket-properties';
import { TicketHubspotApiService } from 'src/common/services/hubspot/ticket-hubspot.service';
import { parseToInt } from 'src/common/utils/number-parser';
import { Repository } from 'typeorm';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketService {
  constructor(
    private readonly ticketHubspotApiService: TicketHubspotApiService,
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
  ) {}

  async create(id: string) {
    try {
      const ticket = await this.ticketHubspotApiService.findOne(id);

      if (ticket) {
        const amount_of_candidates = parseToInt(
          ticket.properties.amount_of_candidates,
        );
        const created_by = parseToInt(ticket.properties.created_by);
        const hs_num_associated_companies = parseToInt(
          ticket.properties.hs_num_associated_companies,
        );
        const hs_num_times_contacted = parseToInt(
          ticket.properties.hs_num_times_contacted,
        );
        const hs_object_id = parseToInt(ticket.properties.hs_object_id);
        const hs_ticket_id = parseToInt(ticket.properties.hs_ticket_id);
        const hs_time_in_1 = parseToInt(ticket.properties.hs_time_in_1);
        const hs_time_in_15643090 = parseToInt(
          ticket.properties.hs_time_in_15643090,
        );
        const hs_time_in_15643091 = parseToInt(
          ticket.properties.hs_time_in_15643091,
        );
        const hs_time_in_3 = parseToInt(ticket.properties.hs_time_in_3);
        const hs_time_in_4 = parseToInt(ticket.properties.hs_time_in_4);
        const hs_time_in_66172822 = parseToInt(
          ticket.properties.hs_time_in_66172822,
        );
        const number_of_positions_filled = parseToInt(
          ticket.properties.number_of_positions_filled,
        );
        const number_of_positions_to_be_filled = parseToInt(
          ticket.properties.number_of_positions_to_be_filled,
        );

        const ticketObj = {
          id: ticket.id,
          ...ticket.properties,
          amount_of_candidates,
          created_by,
          hs_num_associated_companies,
          hs_num_times_contacted,
          hs_object_id,
          hs_ticket_id,
          hs_time_in_1,
          hs_time_in_15643090,
          hs_time_in_15643091,
          hs_time_in_3,
          hs_time_in_4,
          hs_time_in_66172822,
          number_of_positions_filled,
          number_of_positions_to_be_filled,
        };

        const properties = TicketProperties;

        const ticketFilteredObj = Object.keys(ticketObj)
          .filter((key) => properties.includes(key))
          .reduce((newObj, key) => {
            newObj[key] = ticketObj[key];
            return newObj;
          }, {});

        return await this.ticketRepository.save(ticketFilteredObj);
      }

      return null;
    } catch (error) {
      console.log('Error', error);
    }
  }

  async bulkCreate(tickets: any) {
    try {
      return await Promise.all(
        tickets.map(async (ticket: any) => {
          const amount_of_candidates = parseToInt(
            ticket.properties.amount_of_candidates,
          );
          const created_by = parseToInt(ticket.properties.created_by);
          const hs_num_associated_companies = parseToInt(
            ticket.properties.hs_num_associated_companies,
          );
          const hs_num_times_contacted = parseToInt(
            ticket.properties.hs_num_times_contacted,
          );
          const hs_object_id = parseToInt(ticket.properties.hs_object_id);
          const hs_ticket_id = parseToInt(ticket.properties.hs_ticket_id);
          const hs_time_in_1 = parseToInt(ticket.properties.hs_time_in_1);
          const hs_time_in_15643090 = parseToInt(
            ticket.properties.hs_time_in_15643090,
          );
          const hs_time_in_15643091 = parseToInt(
            ticket.properties.hs_time_in_15643091,
          );
          const hs_time_in_3 = parseToInt(ticket.properties.hs_time_in_3);
          const hs_time_in_4 = parseToInt(ticket.properties.hs_time_in_4);
          const hs_time_in_66172822 = parseToInt(
            ticket.properties.hs_time_in_66172822,
          );
          const number_of_positions_filled = parseToInt(
            ticket.properties.number_of_positions_filled,
          );
          const number_of_positions_to_be_filled = parseToInt(
            ticket.properties.number_of_positions_to_be_filled,
          );

          const ticketObj = {
            id: ticket.id,
            ...ticket.properties,
            amount_of_candidates,
            created_by,
            hs_num_associated_companies,
            hs_num_times_contacted,
            hs_object_id,
            hs_ticket_id,
            hs_time_in_1,
            hs_time_in_15643090,
            hs_time_in_15643091,
            hs_time_in_3,
            hs_time_in_4,
            hs_time_in_66172822,
            number_of_positions_filled,
            number_of_positions_to_be_filled,
          };

          const properties = TicketProperties;

          const ticketFilteredObj = Object.keys(ticketObj)
            .filter((key) => properties.includes(key))
            .reduce((newObj, key) => {
              newObj[key] = ticketObj[key];
              return newObj;
            }, {});

          await this.ticketRepository.save(ticketFilteredObj);
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
      const tickets = await this.ticketHubspotApiService.findAll(findParams);

      tickets.paging?.next.after
        ? (findParams.after = tickets.paging.next.after)
        : (allowToContinue = false);

      await this.bulkCreate(tickets.results);
    }
  }

  async findAll() {
    return await this.ticketRepository.find();
  }

  async findOne(id: string) {
    return await this.ticketRepository.findOneBy({ id });
  }

  async update(id: string) {
    try {
      const ticket = await this.ticketHubspotApiService.findOne(id);

      if (ticket) {
        const amount_of_candidates = parseToInt(
          ticket.properties.amount_of_candidates,
        );
        const created_by = parseToInt(ticket.properties.created_by);
        const hs_num_associated_companies = parseToInt(
          ticket.properties.hs_num_associated_companies,
        );
        const hs_num_times_contacted = parseToInt(
          ticket.properties.hs_num_times_contacted,
        );
        const hs_object_id = parseToInt(ticket.properties.hs_object_id);
        const hs_ticket_id = parseToInt(ticket.properties.hs_ticket_id);
        const hs_time_in_1 = parseToInt(ticket.properties.hs_time_in_1);
        const hs_time_in_15643090 = parseToInt(
          ticket.properties.hs_time_in_15643090,
        );
        const hs_time_in_15643091 = parseToInt(
          ticket.properties.hs_time_in_15643091,
        );
        const hs_time_in_3 = parseToInt(ticket.properties.hs_time_in_3);
        const hs_time_in_4 = parseToInt(ticket.properties.hs_time_in_4);
        const hs_time_in_66172822 = parseToInt(
          ticket.properties.hs_time_in_66172822,
        );
        const number_of_positions_filled = parseToInt(
          ticket.properties.number_of_positions_filled,
        );
        const number_of_positions_to_be_filled = parseToInt(
          ticket.properties.number_of_positions_to_be_filled,
        );

        const ticketObj = {
          id: ticket.id,
          ...ticket.properties,
          amount_of_candidates,
          created_by,
          hs_num_associated_companies,
          hs_num_times_contacted,
          hs_object_id,
          hs_ticket_id,
          hs_time_in_1,
          hs_time_in_15643090,
          hs_time_in_15643091,
          hs_time_in_3,
          hs_time_in_4,
          hs_time_in_66172822,
          number_of_positions_filled,
          number_of_positions_to_be_filled,
        };

        const properties = TicketProperties;

        const ticketFilteredObj = Object.keys(ticketObj)
          .filter((key) => properties.includes(key))
          .reduce((newObj, key) => {
            newObj[key] = ticketObj[key];
            return newObj;
          }, {});

        return await this.ticketRepository.update(id, ticketFilteredObj);
      }

      return null;
    } catch (error) {
      console.log('Error:', error);
    }
  }

  async remove(id: string) {
    try {
      const ticket = await this.findOne(id);

      if (ticket) {
        return await this.ticketRepository.delete(id);
      }

      return null;
    } catch (error) {
      console.log('Error', error);
    }
  }
}
