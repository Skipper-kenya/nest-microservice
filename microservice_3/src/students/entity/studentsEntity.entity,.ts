import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idNo: number;

  @Column()
  name: string;

  @Column()
  school: string;

  @Column()
  admNo: number;
}
