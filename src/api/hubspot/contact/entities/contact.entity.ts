import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('contacts', {
  engine: 'MyISAM',
})
export class Contact {
  @PrimaryColumn({ nullable: false })
  id: string;

  @Column({ nullable: true })
  account_type: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true, type: 'double' })
  annualrevenue: number;

  @Column({ nullable: true })
  assistant_email: string;

  @Column({ nullable: true })
  billing_invoicing: string;

  @Column({ nullable: true })
  business_name: string;

  @Column({ nullable: true })
  cancelation_date: Date;

  @Column({ nullable: true, type: 'text' })
  cancelation_message: string;

  @Column({ nullable: true })
  cancellation: string;

  @Column({ nullable: true })
  candidates_name: string;

  @Column({ nullable: true })
  canidates_interviews_status: string;

  @Column({ nullable: true })
  chargify_id: string;

  @Column({ nullable: true, type: 'text' })
  chosen_plan: string;

  @Column({ nullable: true, type: 'text' })
  city: string;

  @Column({ nullable: true })
  clientid: string;

  @Column({ nullable: true })
  company: string;

  @Column({ nullable: true })
  company_name: string;

  @Column({ nullable: true })
  company_size: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  createdate: Date;

  @Column({ nullable: true })
  customer_service: string;

  @Column({ nullable: true })
  database_management_archiving: string;

  @Column({ nullable: true, type: 'bigint' })
  days_to_close: number;

  @Column({ nullable: true })
  db_city: string;

  @Column({ nullable: true })
  db_country: string;

  @Column({ nullable: true, type: 'text' })
  db_state: string;

  @Column({ nullable: true, type: 'text' })
  description: string;

  @Column({ nullable: true })
  do_you_want_to_suscribe_our_blog_: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  experience_required_: string;

  @Column({ nullable: true })
  fax: string;

  @Column({ nullable: true })
  firstname: string;

  @Column({ nullable: true })
  first_conversion_date: Date;

  @Column({ nullable: true, type: 'text' })
  first_conversion_event_name: string;

  @Column({ nullable: true })
  first_deal_created_date: Date;

  @Column({ nullable: true })
  full_name: string;

  @Column({ nullable: true, type: 'text' })
  general_job_description: string;

  @Column({ nullable: true })
  google_click_id: string;

  @Column({ nullable: true })
  growth_potential: string;

  @Column({ nullable: true })
  have_you_worked_with_a_virtual_assistant_before_: string;

  @Column({ nullable: true })
  how_did_you_find_us_: string;

  @Column({ nullable: true })
  how_did_you_hear_about_us_: string;

  @Column({ nullable: true })
  how_many_assistants_does_the_customer_have_: number;

  @Column({ nullable: true })
  how_many_positions_do_you_need_: string;

  @Column({ nullable: true })
  how_many_positions_do_you_need___number_: number;

  @Column({ nullable: true })
  how_many_roles_are_you_looking_to_outsource_: string;

  @Column({ nullable: true })
  hs_additional_emails: string;

  @Column({ nullable: true })
  hs_analytics_first_visit_timestamp: Date;

  @Column({ nullable: true, type: 'bigint' })
  hs_analytics_num_visits: number;

  @Column({ nullable: true, type: 'text' })
  hs_calculated_form_submissions: string;

  @Column({ nullable: true, type: 'text' })
  hs_calculated_mobile_number: string;

  @Column({ nullable: true, type: 'text' })
  hs_calculated_phone_number: string;

  @Column({ nullable: true })
  hs_calculated_phone_number_area_code: string;

  @Column({ nullable: true })
  hs_calculated_phone_number_country_code: string;

  @Column({ nullable: true })
  hs_calculated_phone_number_region_code: string;

  @Column({ nullable: true })
  hs_clicked_linkedin_ad: string;

  @Column({ nullable: true })
  hs_date_entered_customer: Date;

  @Column({ nullable: true })
  hs_date_entered_evangelist: Date;

  @Column({ nullable: true })
  hs_date_entered_lead: Date;

  @Column({ nullable: true })
  hs_date_entered_marketingqualifiedlead: Date;

  @Column({ nullable: true })
  hs_date_entered_opportunity: Date;

  @Column({ nullable: true })
  hs_date_entered_other: Date;

  @Column({ nullable: true })
  hs_date_entered_salesqualifiedlead: Date;

  @Column({ nullable: true })
  hs_date_entered_subscriber: Date;

  @Column({ nullable: true })
  hs_date_exited_customer: Date;

  @Column({ nullable: true })
  hs_date_exited_evangelist: Date;

  @Column({ nullable: true })
  hs_date_exited_lead: Date;

  @Column({ nullable: true })
  hs_date_exited_marketingqualifiedlead: Date;

  @Column({ nullable: true })
  hs_date_exited_opportunity: Date;

  @Column({ nullable: true })
  hs_date_exited_other: Date;

  @Column({ nullable: true })
  hs_date_exited_salesqualifiedlead: Date;

  @Column({ nullable: true })
  hs_date_exited_subscriber: Date;

  @Column({ nullable: true })
  hs_facebook_ad_clicked: string;

  @Column({ nullable: true })
  hs_facebook_click_id: string;

  @Column({ nullable: true })
  hs_facebookid: string;

  @Column({ nullable: true })
  hs_google_click_id: string;

  @Column({ nullable: true })
  hs_googleplusid: string;

  @Column({ nullable: true })
  hs_lead_status: string;

  @Column({ nullable: true })
  hs_lifecyclestage_salesqualifiedlead_date: Date;

  @Column({ nullable: true })
  hs_linkedin_ad_clicked: string;

  @Column({ nullable: true })
  hs_linkedinid: string;

  @Column({ nullable: true })
  hs_persona: string;

  @Column({ nullable: true })
  hs_sales_email_last_clicked: Date;

  @Column({ nullable: true })
  hs_sales_email_last_opened: Date;

  @Column({ nullable: true })
  hs_social_google_plus_clicks: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_between_contact_creation_and_deal_close: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_between_contact_creation_and_deal_creation: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_in_customer: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_in_evangelist: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_in_lead: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_in_marketingqualifiedlead: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_in_opportunity: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_in_other: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_in_salesqualifiedlead: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_in_subscriber: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_to_first_engagement: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_to_move_from_lead_to_customer: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_to_move_from_marketingqualifiedlead_to_customer: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_to_move_from_opportunity_to_customer: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_to_move_from_salesqualifiedlead_to_customer: number;

  @Column({ nullable: true, type: 'bigint' })
  hs_time_to_move_from_subscriber_to_customer: number;

  @Column({ nullable: true })
  industry: string;

  @Column({ nullable: true })
  ip_city: string;

  @Column({ nullable: true })
  ip_country: string;

  @Column({ nullable: true })
  ip_country_code: string;

  @Column({ nullable: true })
  ip_latlon: string;

  @Column({ nullable: true })
  ip_state: string;

  @Column({ nullable: true })
  ip_state_code: string;

  @Column({ nullable: true, type: 'text' })
  job_description: string;

  @Column({ nullable: true, type: 'text' })
  job_description_other: string;

  @Column({ nullable: true })
  lastmodifieddate: Date;

  @Column({ nullable: true })
  lastname: string;

  @Column({ nullable: true })
  lead_score: number;

  @Column({ nullable: true })
  lead_source: string;

  @Column({ nullable: true })
  lead_status__custom: string;

  @Column({ nullable: true })
  lifecycle_stage__custom: string;

  @Column({ nullable: true })
  lifecyclestage: string;

  @Column({ nullable: true, type: 'text' })
  linkedinbio: string;

  @Column({ nullable: true })
  looking_for_team_support: string;

  @Column({ nullable: true })
  mkt_lead_source: string;

  @Column({ nullable: true })
  negative_feedback: string;

  @Column({ nullable: true })
  numemployees: string;

  @Column({ nullable: true })
  pagename: string;

  @Column({ nullable: true })
  pageurl: string;

  @Column({ nullable: true })
  past_client: string;

  @Column({ nullable: true })
  plan: string;

  @Column({ nullable: true, type: 'float' })
  recent_deal_amount: number;

  @Column({ nullable: true })
  recent_deal_close_date: Date;

  @Column({ nullable: true })
  referral_name: string;

  @Column({ nullable: true })
  referred_by__email_: string;

  @Column({ nullable: true })
  referred_by__full_name_: string;

  @Column({ nullable: true })
  secondary_phone: string;

  @Column({ nullable: true, type: 'text' })
  state: string;

  @Column({ nullable: true })
  time_zone: string;

  @Column({ nullable: true })
  times_sales_emails_opened: string;

  @Column({ nullable: true, type: 'double' })
  total_revenue: string;

  @Column({ nullable: true })
  type_of_agent: string;

  @Column({ nullable: true })
  type_of_lead: string;

  @Column({ nullable: true })
  unqualified_reason: string;

  @Column({ nullable: true })
  va_s_email: string;

  @Column({ nullable: true })
  va_s_name: string;

  @Column({ nullable: true })
  va_s_phone_number: string;

  @Column({ nullable: true })
  va_s_skype_id: string;

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true, type: 'text' })
  what_are_you_looking_to_outsource_: string;

  @Column({ nullable: true, type: 'text' })
  what_are_you_trying_to_outsource_: string;

  @Column({ nullable: true, type: 'text' })
  what_can_we_support: string;

  @Column({ nullable: true, type: 'text' })
  what_can_we_support_you_with: string;

  @Column({ nullable: true, type: 'text' })
  what_can_we_support_you_with_disruptive_: string;

  @Column({ nullable: true, type: 'text' })
  what_do_you_need_assistance_with_: string;

  @Column({ nullable: true, type: 'text' })
  what_outsourcing_objective_are_you_trying_to_accomplish_: string;

  @Column({ nullable: true, type: 'text' })
  what_workflow_are_you_looking_to_outsource_: string;

  @Column({ nullable: true, type: 'text' })
  what_workflow_can_we_help_you_with_: string;
}
