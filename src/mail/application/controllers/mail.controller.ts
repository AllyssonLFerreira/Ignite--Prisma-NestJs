import { Controller, Get } from '@nestjs/common';
import { MailService } from '../service/mail.service';

@Controller()
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get()
  getHello(): string {
    return this.mailService.sendMail();
  }
}
