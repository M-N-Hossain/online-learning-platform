import { IsString, IsNotEmpty } from 'class-validator';

export class CreateEnrollmentDto {
  @IsString()
  @IsNotEmpty()
  student: string; // Reference to student ID

  @IsString()
  @IsNotEmpty()
  course: string; // Reference to course ID
}
