import { MailService } from './mail.service';
import { Injectable } from '@nestjs/common';
@Injectable()
export class SMTPMailService implements MailService {
  sendMail(): string {
    return 'Bomb is been planted';
  }
}
