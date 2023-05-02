import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { HubspotModule } from '../hubspot.module';
import { ApiHubspotModule } from 'src/common/services/hubspot/api-hubspot.module';
import { Contact } from './entities/contact.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Contact]),
    ApiHubspotModule,
    forwardRef(() => HubspotModule)
  ],
  controllers: [ContactController],
  providers: [ContactService],
  exports: [ContactService]
})
export class ContactModule {}
