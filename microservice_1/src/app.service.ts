import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, ClientsModule } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('Service_Producer') private readonly client: ClientProxy,
  ) {}

  registerStudent(admNo: number): number {
    this.client.emit(`new-registration`, admNo);
    return admNo;
  }
}
