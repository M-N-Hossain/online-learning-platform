import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
// import { User } from 'src/user/user.schema';
// import { Course } from 'src/course/course.schema';

@Schema()
export class Enrollment extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  student: mongoose.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true })
  course: mongoose.Types.ObjectId;

  @Prop({ default: Date.now })
  enrolledAt: Date;

  @Prop({ type: Number, default: 0 }) // Progress percentage
  progress: number;
}

export const EnrollmentSchema = SchemaFactory.createForClass(Enrollment);
