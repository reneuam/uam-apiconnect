import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { AppService } from './app.service';
import { HubspotModule } from './api/hubspot/hubspot.module';
import { ApiHubspotModule } from './common/services/hubspot/api-hubspot.module';
import { CompanyModule } from './api/hubspot/company/company.module';
import { ContactModule } from './api/hubspot/contact/contact.module';
import { DealModule } from './api/hubspot/deal/deal.module';
import { TicketModule } from './api/hubspot/ticket/ticket.module';

@Module({
  imports: [ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as any,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username  : process.env.DATABASE_USER,
      password  : process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      autoLoadEntities: true
    }),
    ApiHubspotModule,
    CompanyModule,
    ContactModule,
    DealModule,
    HttpModule,
    HubspotModule,
    TicketModule
  ],
  providers: [AppService],
})
export class AppModule {}
