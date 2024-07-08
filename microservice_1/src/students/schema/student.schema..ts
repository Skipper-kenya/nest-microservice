import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Student {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  admNo: number;
  @Prop()
  school: string;
  @Prop({ required: true })
  idNo: number;
}

export const studentSchema = SchemaFactory.createForClass(Student);
