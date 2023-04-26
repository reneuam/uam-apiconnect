import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HubspotModule } from './api/hubspot/hubspot.module';
import { ApiHubspotModule } from './common/services/hubspot/api-hubspot.module';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as any,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username  : process.env.DATABASE_USER,
      password  : process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      autoLoadEntities: true,
      extra : {
        connectionLimit: 100
      }
    }),
    ApiHubspotModule,
    HttpModule,
    HubspotModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
