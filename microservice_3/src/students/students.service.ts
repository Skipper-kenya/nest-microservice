import { Injectable } from '@nestjs/common';
import { studentDetailsInterface } from './students.controller';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entity/studentsEntity.entity,';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentEntity: Repository<Student>,
  ) {}

  async createSqlStudent(details: Student): Promise<void> {
    try {
      const existingSqlStudent = await this.studentEntity.findOneBy({
        idNo: details.idNo,
      });
      if (existingSqlStudent) {
        console.log('student exist');
      }

      await this.studentEntity.save(details);
    } catch (error) {
      console.log(error.message);
    }
  }
}
