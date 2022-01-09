import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Books as Book } from '../../books/entities/book.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password?: string;

  @Column({ default: null, type:"datetime"})
  created_at?:  Date;

  @Column({ default: null, type:"datetime"})
  updated_at?:  Date;

  @OneToMany(() => Book, book => book.user)
    books?: Book[];
}