import { IsEmail, IsNotEmpty, IsBoolean, IsString, IsOptional, IsEmpty } from 'class-validator';

export class UserDTO {

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

}

export class UserResponseDTO {

  @IsOptional()
  id: string;

  @IsEmail() 
  email: string;

  @IsBoolean()
  error: boolean;

  @IsString()
  @IsNotEmpty()
  message: string;

}