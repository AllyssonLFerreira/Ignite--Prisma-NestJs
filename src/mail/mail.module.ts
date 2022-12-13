import { Module } from '@nestjs/common';
import { MailController } from './application/controllers/mail.controller';
import { MailService } from './application/service/mail.service';
import { SMTPMailService } from './application/service/smtp.mail.service';

@Module({
  imports: [],
  controllers: [MailController],
  providers: [
    {
      provide: MailService,
      useClass: SMTPMailService,
    },
  ],
})
export class MailModule {}
