import { IsEmail, IsIn, IsNotEmpty, IsString } from 'class-validator';

import { ROLES } from '../../../roles.constants';

export class RegisterDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsString()
  password: string;

  @IsNotEmpty({ message: 'Role is required' })
  @IsIn([ROLES.ADMIN, ROLES.INSTRUCTOR, ROLES.STUDENT], {
    message: 'Invalid role',
  })
  role: string;
}
