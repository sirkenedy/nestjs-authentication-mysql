import { Users as User } from '../../users/entities/user.entity';
import { IsNotEmpty, IsString, isArray } from 'class-validator';

export class CreateBookDto {
    @IsNotEmpty({"message" : "Book title cannot be empty"})
    @IsString({"message" : "Book title must be of type string"})
    title: string;
    
    @IsNotEmpty({"message" : "Book description cannot be empty"})
    @IsString({"message" : "Book desciption must be of type string"})
    description: number;
    
    @IsNotEmpty({"message" : "Book thumnail cannot be empty"})
    @IsString({"message" : "Book thumbnail must be of type string"}) //@isUrl can be used to verify that it is a valid url
    thumbnail: string;
    
    @IsNotEmpty({"message" : "Book author cannot be empty"})
    author: string[];
    
    @IsNotEmpty({"message" : "Seems like something went wrong! please try again"})
    user : User
}