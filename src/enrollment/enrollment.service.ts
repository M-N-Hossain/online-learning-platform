import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from 'src/course/course-schema/course.schema';
import { User } from 'src/user/user-schema/user.schema';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { Enrollment } from './enrollment-schema/enrollment.schema';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectModel(Enrollment.name) private enrollmentModel: Model<Enrollment>,
    @InjectModel(Course.name) private courseModel: Model<Course>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async enroll(createEnrollmentDto: CreateEnrollmentDto): Promise<Enrollment> {
    const enrollment = new this.enrollmentModel(createEnrollmentDto);
    return enrollment.save();
  }

  // async findEnrollmentsByStudent(student: string): Promise<Enrollment[]> {
  //   return this.enrollmentModel.find({ student }).exec();
  // }

  async findEnrolledCoursesByStudent(student: string): Promise<any[]> {
    console.log('first');
    const enrollments = await this.enrollmentModel
      .find({ student })
      .populate('course')
      .select('course -_id')
      .exec();

    return enrollments.map((enrollment) => enrollment.course);
  }

  async findEnrollmentsByCourse(course: string): Promise<Enrollment[]> {
    return this.enrollmentModel.find({ course }).exec();
  }
}
