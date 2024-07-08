import { Controller, Inject } from '@nestjs/common';
import { StudentsService } from './students.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Student } from './entity/studentsEntity.entity,';

export interface studentDetailsInterface {
  name: string;
  admNo: number;
  idNo: number;
  school: string;
}

@Controller('students')
export class StudentsController {
  constructor(@Inject() private readonly studentsService: StudentsService) {}

  @EventPattern('register-student')
  async createSqlStudent(@Payload() details: Student): Promise<void> {
    this.studentsService.createSqlStudent(details);
  }
}
