import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('deals')
export class Deal {
  @PrimaryColumn({ nullable: false })
  id: string;
  @Column()
  agent_acount: number;
  @Column()
	amount: number;
  @Column()
	amount_in_home_currency: number;
  @Column()
	business_unit: string;
  @Column()
	closed_lost_reason: string;
  @Column()
	closed_lost_reason_detail: string;
  @Column()
	closed_won_reason: string;
  @Column()
	contract_value: number;
  @Column()
	createdate: Date;
  @Column()
	date_discovery_call: Date;
  @Column()
	date_looking_god: Date;
  @Column()
	date_proposal: Date;
  @Column()
	date_service_agreement: Date;
  @Column()
	date_signature: Date;
  @Column()
	date_signed_sold: Date;
  @Column()
	date_verbal_yes: Date;
  @Column()
	date_won: Date;
  @Column()
	deal_growth_potential: string;
  @Column()
	deal_tracker: string;
  @Column()
	dealname: string;
  @Column()
	dealstage: string;
  @Column()
	funell_stage: string;
  @Column()
	growth_potential: number;
  @Column()
	headcount_needed: number;
  @Column()
	hs_analytics_source: string;
  @Column()
	hs_campaign: string;
  @Column()
	hs_date_entered_closedwon: Date;
  @Column()
	hs_is_closed_won: number;
  @Column()
	lead_source__deal_: string;
  @Column()
	paid: number;
  @Column()
	payment_date: Date;
  @Column()
	pipeline: string;
  @Column()
	plan: string;
  @Column()
	price_per_hour: number;
  @Column()
	reactivation: number;
  @Column()
	sales_cycle: number;
  @Column()
	specific_deal_type: string;
  @Column()
	type_of_agent: string;
  @Column()
	type_of_deal: string;
}
