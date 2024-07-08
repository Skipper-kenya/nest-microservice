import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';

export const MicroserviceName = 'Service_Producer';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest_microservice'),
    ClientsModule.register([
      {
        name: 'Service_Producer',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'registration_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),

    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
