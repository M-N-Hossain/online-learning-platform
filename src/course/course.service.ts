import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Course } from './course-schema/course.schema';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const course = new this.courseModel(createCourseDto);
    return course.save();
  }

  async findAll(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }

  async findById(courseId: string): Promise<Course | null> {
    return this.courseModel.findById(courseId).exec();
  }

  async findCourseWithStudents(courseId: string): Promise<Course | null> {
    return this.courseModel.findById(courseId).populate('students').exec();
  }

  async update(
    courseId: string,
    updates: Partial<Course>,
  ): Promise<Course | null> {
    return this.courseModel
      .findByIdAndUpdate(courseId, updates, { new: true })
      .exec();
  }

  async delete(courseId: string): Promise<Course | null> {
    return this.courseModel.findByIdAndDelete(courseId).exec();
  }
}
