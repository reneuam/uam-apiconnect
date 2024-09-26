import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tickets', {
  engine: 'MyISAM',
})
export class Ticket {
  @PrimaryColumn({ nullable: false })
  id: string;

  @Column({ nullable: true })
  amount_of_candidates: number;

  @Column({ nullable: true })
  closed_date: Date;

  @Column({ nullable: true })
  created_by: number;

  @Column({ nullable: true })
  createdate: Date;

  @Column({ nullable: true })
  deal_owner: string;

  @Column({ nullable: true })
  deal_type: string;

  @Column({ nullable: true })
  hs_all_assigned_business_unit_ids: string;

  @Column({ nullable: true })
  hs_date_entered_1: Date;

  @Column({ nullable: true })
  hs_date_entered_15643090: Date;

  @Column({ nullable: true })
  hs_date_entered_15643091: Date;

  @Column({ nullable: true })
  hs_date_entered_3: Date;

  @Column({ nullable: true })
  hs_date_entered_4: Date;

  @Column({ nullable: true })
  hs_date_entered_66172822: Date;

  @Column({ nullable: true })
  hs_date_exited_1: Date;

  @Column({ nullable: true })
  hs_date_exited_15643090: Date;

  @Column({ nullable: true })
  hs_date_exited_15643091: Date;

  @Column({ nullable: true })
  hs_date_exited_3: Date;

  @Column({ nullable: true })
  hs_date_exited_4: Date;

  @Column({ nullable: true })
  hs_date_exited_66172822: Date;

  @Column({ nullable: true })
  hs_num_associated_companies: number;

  @Column({ nullable: true })
  hs_num_times_contacted: number;

  @Column({ nullable: true })
  hs_object_id: string;

  @Column({ nullable: true })
  hs_pipeline: string;

  @Column({ nullable: true })
  hs_pipeline_stage: string;

  @Column({ nullable: true, type: 'text' })
  hs_ticket_id: string;

  @Column({ nullable: true })
  hs_ticket_priority: string;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_in_1: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_in_15643090: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_in_15643091: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_in_3: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_in_4: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_in_66172822: number;

  @Column({ nullable: true })
  hubspot_owner_assigneddate: Date;

  @Column({ nullable: true })
  number_of_positions_filled: number;

  @Column({ nullable: true })
  number_of_positions_to_be_filled: number;

  @Column({ nullable: true })
  plan: string;

  @Column({ nullable: true })
  position_title: string;

  @Column({ nullable: true })
  service_type: string;

  @Column({ nullable: true })
  ticket_lifecycle_stage: string;

  @Column({ nullable: true })
  ticket_type: string;

  @Column({ nullable: true })
  subject: string;

  @Column({ nullable: true, type: 'text' })
  content: string;

  @Column({ nullable: true })
  source_type: string;
}
