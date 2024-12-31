import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Enrollment extends Document {
  // Reference to the student's ID or email
  @Prop({ required: true })
  student: string;

  // Reference to the course's ID
  @Prop({ required: true })
  course: string;

  @Prop({ default: Date.now })
  enrolledAt: Date;
}

export const EnrollmentSchema = SchemaFactory.createForClass(Enrollment);
