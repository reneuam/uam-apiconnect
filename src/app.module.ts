import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HubspotModule } from './api/hubspot/hubspot.module';
import { ApiHubspotModule } from './common/services/hubspot/api-hubspot.module';

@Module({
  imports: [ConfigModule.forRoot(),
    ApiHubspotModule,
    HttpModule,
    HubspotModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
