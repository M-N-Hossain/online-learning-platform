import { IsOptional, IsString } from 'class-validator';

export class UpdateEnrollmentDto {
  @IsOptional()
  @IsString()
  courseId: string;

  @IsOptional()
  @IsString()
  studentId: string;
}
