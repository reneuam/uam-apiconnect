import { Module, forwardRef } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { HubspotModule } from '../hubspot.module';
import { ApiHubspotModule } from 'src/common/services/hubspot/api-hubspot.module';

@Module({
  imports: [ApiHubspotModule, forwardRef(() => HubspotModule)],
  controllers: [ContactController],
  providers: [ContactService]
})
export class ContactModule {}
