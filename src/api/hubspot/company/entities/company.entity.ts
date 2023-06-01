import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('companies')
export class Company {
  @PrimaryColumn({ nullable: false })
  id: string;
  @Column()
  founded_year: string;
  @Column()
  hire_potential: string;
  @Column()
  hs_all_assigned_business_unit_ids: string;
  @Column()
  hs_analytics_latest_source: string;
  @Column()
  hs_analytics_num_page_views: number;
  @Column()
  hs_analytics_num_visits: number;
  @Column()
  hs_analytics_source: string;
  @Column()
  hs_created_by_user_id: number;
  @Column()
  hs_createdate: Date;
  @Column()
  hs_last_sales_activity_type: string;
  @Column()
  hs_merged_object_ids: string;
  @Column()
  hs_object_id: number;
  @Column()
  is_public: string;
  @Column()
  lead_potencial: string;
  @Column()
  num_associated_contacts: number;
  @Column()
  num_associated_deals: number;
  @Column()
  total_revenue: number;
  @Column()
  name: string;
  @Column()
  city: string;
  @Column()
  state: string;
  @Column()
  hubspot_owner_id: string;
  @Column()
  country: string;
  @Column()
  website: string;
  @Column()
  domain: string;
  @Column()
  numberofemployees: number;
  @Column()
  industry: string;
  @Column()
  annualrevenue: number;
  @Column()
  lifecyclestage: string;
  @Column()
  hs_lead_status: string;
  @Column()
  createdate: Date;
}
