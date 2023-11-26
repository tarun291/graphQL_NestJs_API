/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      port: 5432,
      password: '@Kumar321',
      database: 'TestDB',
      entities: [__dirname + '/../**/*.entity.js'] ,
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
