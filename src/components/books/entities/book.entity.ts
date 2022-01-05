import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  thumbnail: string;

  @Column()
  author: string;

  @Column({ default: null, type:"datetime" })
  created_at?:  Date;

  @Column({ default: null, type:"datetime" })
  updated_at?:  Date;
}