import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost:27017/online-learning-platform',
      // {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      // },
    ),
    AuthModule,
    UserModule,
    CourseModule,
    EnrollmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
