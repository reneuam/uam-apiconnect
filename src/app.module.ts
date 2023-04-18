import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HubspotModule } from './hubspot/hubspot.module';

@Module({
  imports: [ConfigModule.forRoot(), 
    HttpModule,
    HubspotModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
