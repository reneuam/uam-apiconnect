import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('companies', {
  engine: 'MyISAM',
})
export class Company {
  @PrimaryColumn({ nullable: false })
  id: string;

  @Column({ nullable: true, type: 'text' })
  name: string;

  @Column({ nullable: true })
  founded_year: number;

  @Column({ nullable: true })
  hire_potential: string;

  @Column({ nullable: true })
  hs_all_assigned_business_unit_ids: string;

  @Column({ nullable: true })
  hs_analytics_latest_source: string;

  @Column({ nullable: true })
  hs_analytics_num_page_views: number;

  @Column({ nullable: true })
  hs_analytics_num_visits: number;

  @Column({ nullable: true })
  hs_analytics_source: string;

  @Column({ nullable: true })
  hs_created_by_user_id: string;

  @Column({ nullable: true })
  hs_createdate: Date;

  @Column({ nullable: true })
  hs_last_sales_activity_type: string;

  @Column({ nullable: true })
  hs_merged_object_ids: string;

  @Column({ nullable: true })
  is_public: string;

  @Column({ nullable: true })
  lead_potencial: string;

  @Column({ nullable: true })
  num_associated_contacts: number;

  @Column({ nullable: true })
  num_associated_deals: number;

  @Column({ nullable: true, type: 'double' })
  total_revenue: number;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  hubspot_owner_id: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true })
  domain: string;

  @Column({ nullable: true })
  numberofemployees: number;

  @Column({ nullable: true })
  industry: string;

  @Column({ nullable: true, type: 'double' })
  annualrevenue: number;

  @Column({ nullable: true })
  lifecyclestage: string;

  @Column({ nullable: true })
  hs_lead_status: string;

  @Column({ nullable: true })
  createdate: Date;
}
