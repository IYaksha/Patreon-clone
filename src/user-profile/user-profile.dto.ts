import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class UserProfileDTO {

  @IsNotEmpty()
  @IsString()
  firstName: string

  @IsString()
  @IsOptional()
  middleName: string

  @IsNotEmpty()
  @IsString()
  lastName: string

}