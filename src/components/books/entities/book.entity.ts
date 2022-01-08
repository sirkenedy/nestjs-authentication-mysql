import { Users as User } from 'src/components/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

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

  @ManyToOne(() => User, user => user.books)
    user: User;
}