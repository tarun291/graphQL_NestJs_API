/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { DatabaseModule } from './database/database.module';
import { CourseModule } from './course/course.module';
@Module({
  imports: [
    StudentModule,
    CourseModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
