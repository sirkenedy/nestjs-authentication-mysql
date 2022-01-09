import { Users as User } from '../../users/entities/user.entity';
export class CreateBookDto {
    title: string;
    description: number;
    thumbnail: string;
    author: string[];
    user : User
}