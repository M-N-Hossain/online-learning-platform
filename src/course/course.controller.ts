/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/common/roles.decorator';
import { RolesGuard } from 'src/common/roles/roles.guard';
import { ROLES } from 'src/roles.constants';
import { CourseService } from './course.service';

@Controller('courses')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  @Roles(ROLES.INSTRUCTOR)
  async createCourse(
    @Body() body: { title: string; description: string; instructor: string },
  ) {
    return this.courseService.create(body);
  }

  @Get()
  @Roles(ROLES.INSTRUCTOR, ROLES.STUDENT)
  async getAllCourses() {
    return this.courseService.findAll();
  }

  @Get(':id')
  @Roles(ROLES.INSTRUCTOR, ROLES.STUDENT)
  async getCourseById(@Param('id') id: string) {
    return this.courseService.findById(id);
  }

  @Put(':id')
  @Roles(ROLES.INSTRUCTOR)
  async updateCourse(
    @Param('id') id: string,
    @Body() updates: Partial<{ title: string; description: string }>,
  ) {
    return this.courseService.update(id, updates);
  }

  @Delete(':id')
  @Roles(ROLES.INSTRUCTOR)
  async deleteCourse(@Param('id') id: string) {
    return this.courseService.delete(id);
  }
}
