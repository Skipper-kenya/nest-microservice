import { Inject, Injectable } from '@nestjs/common';
import { Student } from './schema/student.schema.';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { studentDetailsInterface } from './students.controller';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<Student>,
    @Inject('Service_Producer') private readonly client: ClientProxy,
  ) {}

  async saveStudent(details: studentDetailsInterface) {
    const existingStudent = await this.studentModel.findOne({
      admNo: details.admNo,
    });

    if (existingStudent) {
      return { message: 'student exists', success: false };
    }

    try {
      this.client.emit('register-student', details);

      const newStudent = new this.studentModel(details);
      await newStudent.save();

      return { message: 'student created', success: true, data: newStudent };
    } catch (error) {
      console.log(error.message);
      return { success: false, message: error.message };
    }
  }
}
