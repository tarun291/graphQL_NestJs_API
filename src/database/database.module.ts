/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: '',
      port: 5432,
      password: '',
      database: 'TestDB',
      entities: [__dirname + '/../**/*.entity.js'] ,
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
