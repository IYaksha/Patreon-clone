import { IsNotEmpty, IsString } from "class-validator";

export class PlatformDTO {
  
  @IsNotEmpty()
  @IsString()
  platformName: string;

  @IsNotEmpty()
  @IsString()
  platformDescription: string;

}