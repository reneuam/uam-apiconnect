import { Module, forwardRef } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { HubspotModule } from '../hubspot.module';

@Module({
  imports: [forwardRef(() => HubspotModule)],
  controllers: [ContactController],
  providers: [ContactService]
})
export class ContactModule {}
