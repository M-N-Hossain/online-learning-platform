import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Enrollment,
  EnrollmentSchema,
} from './enrollment-schema/enrollment.schema';
import { EnrollmentController } from './enrollment.controller';
import { EnrollmentService } from './enrollment.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Enrollment.name, schema: EnrollmentSchema },
    ]),
  ],
  providers: [EnrollmentService],
  controllers: [EnrollmentController],
})
export class EnrollmentModule {}
