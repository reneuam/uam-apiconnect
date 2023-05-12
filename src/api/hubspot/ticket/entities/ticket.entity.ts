import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tickets')
export class Ticket {
  @PrimaryColumn({ nullable: false })
  id: string;
  @Column()
  amount_of_candidates: number;
  @Column()
  closed_date: Date;
  @Column()
  created_by: number;
  @Column()
  createdate: Date;
  @Column()
  deal_owner: string;
  @Column()
  deal_type: string;
  @Column()
  hs_all_assigned_business_unit_ids: string;
  @Column()
  hs_date_entered_1: Date;
  @Column()
  hs_date_entered_15643090: Date;
  @Column()
  hs_date_entered_15643091: Date;
  @Column()
  hs_date_entered_3: Date;
  @Column()
  hs_date_entered_4: Date;
  @Column()
  hs_date_entered_66172822: Date;
  @Column()
  hs_date_exited_1: Date;
  @Column()
  hs_date_exited_15643090: Date;
  @Column()
  hs_date_exited_15643091: Date;
  @Column()
  hs_date_exited_3: Date;
  @Column()
  hs_date_exited_4: Date;
  @Column()
  hs_date_exited_66172822: Date;
  @Column()
  hs_num_associated_companies: number;
  @Column()
  hs_num_times_contacted: number;
  @Column()
  hs_object_id: number;
  @Column()
  hs_pipeline: string;
  @Column()
  hs_pipeline_stage: string;
  @Column()
  hs_ticket_id: number;
  @Column()
  hs_ticket_priority: string;
  @Column()
  hs_time_in_1: number;
  @Column()
  hs_time_in_15643090: number;
  @Column()
  hs_time_in_15643091: number;
  @Column()
  hs_time_in_3: number;
  @Column()
  hs_time_in_4: number;
  @Column()
  hs_time_in_66172822: number;
  @Column()
  hubspot_owner_assigneddate: Date;
  @Column()
  number_of_positions_filled: number;
  @Column()
  number_of_positions_to_be_filled: number;
  @Column()
  plan: string;
  @Column()
  position_title: string;
  @Column()
  service_type: string;
  @Column()
  ticket_lifecycle_stage: string;
  @Column()
  ticket_type: string;
  @Column()
  subject: string;
  @Column()
  content: string;
  @Column()
  source_type: string;
}
