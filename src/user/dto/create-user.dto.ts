import { IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  address: string;

  @IsString()
  age: string;

  @IsString()
  profession: string;

  @IsString()
  country: string;

  @IsString()
  state: string;
}
