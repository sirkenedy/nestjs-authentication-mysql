import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty({"message" : "Name field cannot be empty"})
    name: string;
    
    @IsEmail({"message" : "Enter a valid email adress"})
    email: number;
    
    @IsNotEmpty({"message" : "Password field cannot be empty"})
    password: string;
}
