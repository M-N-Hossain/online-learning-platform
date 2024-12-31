import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/common/roles.decorator';
import { RolesGuard } from 'src/common/roles/roles.guard';
import { EnrollmentService } from './enrollment.service';
import { ROLES } from 'src/roles.constants';

@Controller('enrollments')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post()
  @Roles(ROLES.STUDENT)
  async enroll(@Body() body: { student: string; course: string }) {
    return this.enrollmentService.enroll(body.student, body.course);
  }

  @Get('student/:studentId')
  @Roles(ROLES.STUDENT)
  async getEnrollmentsByStudent(@Param('studentId') studentId: string) {
    return this.enrollmentService.findEnrollmentsByStudent(studentId);
  }

  @Get('course/:courseId')
  @Roles(ROLES.INSTRUCTOR)
  async getEnrollmentsByCourse(@Param('courseId') courseId: string) {
    return this.enrollmentService.findEnrollmentsByCourse(courseId);
  }
}
