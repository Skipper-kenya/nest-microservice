import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/register')
  getHello(@Body() body: { admNo: number }): number {
    const { admNo } = body;

    return this.appService.registerStudent(admNo);
  }
}
