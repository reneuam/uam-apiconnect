import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('deals', {
  engine: 'MyISAM',
})
export class Deal {
  @PrimaryColumn({ nullable: false })
  id: string;

  @Column({ nullable: true })
  agent_acount: number;

  @Column({ nullable: true })
  amount: number;

  @Column({ nullable: true })
  amount_in_home_currency: number;

  @Column({ nullable: true })
  business_unit: string;

  @Column({ nullable: true })
  closed_lost_reason: string;

  @Column({ nullable: true, type: 'text' })
  closed_lost_reason_detail: string;

  @Column({ nullable: true })
  closed_won_reason: string;

  @Column({ nullable: true })
  contract_value: number;

  @Column({ nullable: true })
  createdate: Date;

  @Column({ nullable: true })
  date_discovery_call: Date;

  @Column({ nullable: true })
  date_looking_god: Date;

  @Column({ nullable: true })
  date_proposal: Date;

  @Column({ nullable: true })
  date_service_agreement: Date;

  @Column({ nullable: true })
  date_signature: Date;

  @Column({ nullable: true })
  date_signed_sold: Date;

  @Column({ nullable: true })
  date_verbal_yes: Date;

  @Column({ nullable: true })
  date_won: Date;

  @Column({ nullable: true })
  deal_growth_potential: string;

  @Column({ nullable: true })
  deal_tracker: string;

  @Column({ nullable: true })
  dealname: string;

  @Column({ nullable: true })
  dealstage: string;

  @Column({ nullable: true })
  funell_stage: string;

  @Column({ nullable: true })
  growth_potential: string;

  @Column({ nullable: true })
  headcount_needed: number;

  @Column({ nullable: true })
  hs_analytics_source: string;

  @Column({ nullable: true })
  hs_campaign: string;

  @Column({ nullable: true })
  hs_date_entered_closedwon: Date;

  @Column({ nullable: true })
  hs_lastmodifieddate: Date;

  @Column({ nullable: true })
  hs_is_closed_won: number;

  @Column({ nullable: true })
  hubspot_owner_id: number;

  @Column({ nullable: true })
  lead_source__deal_: string;

  @Column({ nullable: true })
  paid: number;

  @Column({ nullable: true })
  payment_date: Date;

  @Column({ nullable: true })
  pipeline: string;

  @Column({ nullable: true })
  plan: string;

  @Column({ nullable: true })
  price_per_hour: number;

  @Column({ nullable: true })
  reactivation: number;

  @Column({ nullable: true })
  sales_cycle: string;

  @Column({ nullable: true })
  specific_deal_type: string;

  @Column({ nullable: true })
  type_of_agent: string;

  @Column({ nullable: true })
  type_of_deal: string;
}
