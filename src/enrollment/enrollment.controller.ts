import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/common/roles.decorator';
import { RolesGuard } from 'src/common/roles/roles.guard';
import { ROLES } from 'src/roles.constants';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { EnrollmentService } from './enrollment.service';

@Controller('enrollments')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post()
  @Roles(ROLES.STUDENT)
  @UsePipes(new ValidationPipe({ transform: true }))
  async enroll(@Body() createEnrollmentDto: CreateEnrollmentDto) {
    return this.enrollmentService.enroll(createEnrollmentDto);
  }

  @Get('student/:studentId')
  @Roles(ROLES.STUDENT)
  async getEnrollmentsByStudent(@Param('studentId') studentId: string) {
    return this.enrollmentService.findEnrolledCoursesByStudent(studentId);
  }

  @Get('course/:courseId')
  @Roles(ROLES.INSTRUCTOR)
  async getEnrollmentsByCourse(@Param('courseId') courseId: string) {
    return this.enrollmentService.findEnrollmentsByCourse(courseId);
  }
}
