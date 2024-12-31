import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Enrollment } from './enrollment-schema/enrollment.schema';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectModel(Enrollment.name) private enrollmentModel: Model<Enrollment>,
  ) {}

  async enroll(student: string, course: string): Promise<Enrollment> {
    const enrollment = new this.enrollmentModel({ student, course });
    return enrollment.save();
  }

  async findEnrollmentsByStudent(student: string): Promise<Enrollment[]> {
    return this.enrollmentModel.find({ student }).exec();
  }

  async findEnrollmentsByCourse(course: string): Promise<Enrollment[]> {
    return this.enrollmentModel.find({ course }).exec();
  }
}
