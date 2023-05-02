import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('contacts')
export class Contact {
  @PrimaryColumn({ nullable: false })
  id: string;
  @Column()
  account_type: string;
  @Column()
	address: string;
  @Column()
	annualrevenue: string;
  @Column()
	assistant_email: string;
  @Column()
	billing_invoicing: string;
  @Column()
	business_name: string;
  @Column()
	cancelation_date: Date;
  @Column()
	cancelation_message: string;
  @Column()
	cancellation: string;
  @Column()
	candidates_name: string;
  @Column()
	canidates_interviews_status: string;
  @Column()
  chargify_id: string;
  @Column()
	chosen_plan: string;
  @Column()
	city: string;
  @Column()
	clientid: string;
  @Column()
	company: string;
  @Column()
	company_name: string;
  @Column()
	company_size: string;
  @Column()
	country: string;
  @Column()
  createdate: Date;
  @Column()
	customer_service: string;
  @Column()
	database_management_archiving: string;
  @Column()
	days_to_close: number;
  @Column()
	db_city: string;
  @Column()
	db_country: string;
  @Column()
	db_state: string;
  @Column()
	description: string;
  @Column()
	do_you_want_to_suscribe_our_blog_: string;
  @Column()
	email: string;
  @Column()
	experience_required_: string;
  @Column()
	fax: string;
  @Column()
	first_conversion_date: Date;
  @Column()
	first_conversion_event_name: string;
  @Column()
	first_deal_created_date: Date;
  @Column()
	full_name: string;
  @Column()
	general_job_description: string;
  @Column()
	google_click_id: string;
  @Column()
	growth_potential: string;
  @Column()
	have_you_worked_with_a_virtual_assistant_before_: string;
  @Column()
	how_did_you_find_us_: string;
  @Column()
	how_did_you_hear_about_us_: string;
  @Column()
	how_many_assistants_does_the_customer_have_: number;
  @Column()
	how_many_positions_do_you_need_: string;
  @Column()
	how_many_positions_do_you_need___number_: number;
  @Column()
	how_many_roles_are_you_looking_to_outsource_: string;
  @Column()
	hs_additional_emails: string;
  @Column()
	hs_analytics_first_visit_timestamp: Date;
  @Column()
	hs_analytics_num_visits: number;
  @Column()
	hs_calculated_form_submissions: string;
  @Column()
	hs_calculated_mobile_number: string;
  @Column()
	hs_calculated_phone_number: string;
  @Column()
	hs_calculated_phone_number_area_code: string;
  @Column()
	hs_calculated_phone_number_country_code: string;
  @Column()
	hs_calculated_phone_number_region_code: string;
  @Column()
	hs_clicked_linkedin_ad: string;
  @Column()
	hs_date_entered_customer: Date;
  @Column()
	hs_date_entered_evangelist: Date;
  @Column()
	hs_date_entered_lead: Date;
  @Column()
	hs_date_entered_marketingqualifiedlead: Date;
  @Column()
	hs_date_entered_opportunity: Date;
  @Column()
	hs_date_entered_other: Date;
  @Column()
	hs_date_entered_salesqualifiedlead: Date;
  @Column()
	hs_date_entered_subscriber: Date;
  @Column()
	hs_date_exited_customer: Date;
  @Column()
	hs_date_exited_evangelist: Date;
  @Column()
	hs_date_exited_lead: Date;
  @Column()
	hs_date_exited_marketingqualifiedlead: Date;
  @Column()
	hs_date_exited_opportunity: Date;
  @Column()
	hs_date_exited_other: Date;
  @Column()
	hs_date_exited_salesqualifiedlead: Date;
  @Column()
	hs_date_exited_subscriber: Date;
  @Column()
	hs_facebook_ad_clicked: string;
  @Column()
	hs_facebook_click_id: string;
  @Column()
	hs_facebookid: string;
  @Column()
	hs_google_click_id: string;
  @Column()
	hs_googleplusid: string;
  @Column()
	hs_lead_status: string;
  @Column()
	hs_lifecyclestage_salesqualifiedlead_date: Date;
  @Column()
	hs_linkedin_ad_clicked: string;
  @Column()
	hs_linkedinid: string;
  @Column()
	hs_persona: string;
  @Column()
	hs_sales_email_last_clicked: Date;
  @Column()
	hs_sales_email_last_opened: Date;
  @Column()
	hs_social_google_plus_clicks: number;
  @Column()
	hs_time_between_contact_creation_and_deal_close: string;
  @Column()
	hs_time_between_contact_creation_and_deal_creation: string;
  @Column()
	hs_time_in_customer: string;
  @Column()
	hs_time_in_evangelist: string;
  @Column()
	hs_time_in_lead: string;
  @Column()
	hs_time_in_marketingqualifiedlead: string;
  @Column()
	hs_time_in_opportunity: string;
  @Column()
	hs_time_in_other: string;
  @Column()
	hs_time_in_salesqualifiedlead: string;
  @Column()
	hs_time_in_subscriber: string;
  @Column()
	hs_time_to_first_engagement: string;
  @Column()
	hs_time_to_move_from_lead_to_customer: string;
  @Column()
	hs_time_to_move_from_marketingqualifiedlead_to_customer: string;
  @Column()
	hs_time_to_move_from_opportunity_to_customer: string;
  @Column()
	hs_time_to_move_from_salesqualifiedlead_to_customer: string;
  @Column()
	hs_time_to_move_from_subscriber_to_customer: string;
  @Column()
  industry: string;
  @Column()
	ip_city: string;
  @Column()
	ip_country: string;
  @Column()
	ip_country_code: string;
  @Column()
	ip_latlon: string;
  @Column()
	ip_state: string;
  @Column()
	ip_state_code: string;
  @Column()
	job_description: string;
  @Column()
	job_description_other: string;
  @Column()
	lastname: string;
  @Column()
	lead_score: number;
  @Column()
	lead_source: string;
  @Column()
	lead_status__custom: string;
  @Column()
	lifecycle_stage__custom: string;
  @Column()
	lifecyclestage: string;
  @Column()
	linkedinbio: string;
  @Column()
	looking_for_team_support: string;
  @Column()
	negative_feedback: string;
  @Column()
	numemployees: string;
  @Column()
  pagename: string;
  @Column()
	pageurl: string;
  @Column()
	past_client: string;
  @Column()
	plan: string;
  @Column()
	recent_deal_amount: string;
  @Column()
	recent_deal_close_date: Date;
  @Column()
	referral_name: string;
  @Column()
	referred_by__email_: string;
  @Column()
	referred_by__full_name_: string;
  @Column()
	secondary_phone: string;
  @Column()
	state: string;
  @Column()
	time_zone: string;
  @Column()
	times_sales_emails_opened: string;
  @Column()
	total_revenue: string;
  @Column()
	type_of_agent: string;
  @Column()
	type_of_lead: string;
  @Column()
	unqualified_reason: string;
  @Column()
	va_s_email: string;
  @Column()
	va_s_name: string;
  @Column()
	va_s_phone_number: string;
  @Column()
	va_s_skype_id: string;
  @Column()
	website: string;
  @Column()
  what_are_you_looking_to_outsource_: string;
  @Column()
	what_are_you_trying_to_outsource_: string;
  @Column()
	what_can_we_support: string;
  @Column()
	what_can_we_support_you_with: string;
  @Column()
	what_can_we_support_you_with_disruptive_: string;
  @Column()
	what_do_you_need_assistance_with_: string;
  @Column()
	what_outsourcing_objective_are_you_trying_to_accomplish_: string;
  @Column()
	what_workflow_are_you_looking_to_outsource_: string;
  @Column()
	what_workflow_can_we_help_you_with_: string;
}
