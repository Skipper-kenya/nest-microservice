import { Body, Controller, Inject, Post } from '@nestjs/common';
import { StudentsService } from './students.service';

export interface studentDetailsInterface {
  name: string;
  admNo: number;
  idNo: number;
  school: string;
}

@Controller('students')
export class StudentsController {
  constructor(@Inject() private readonly studentsService: StudentsService) {}

  @Post()
  async saveStudent(@Body() details: studentDetailsInterface) {
    return this.studentsService.saveStudent(details);
  }
}
