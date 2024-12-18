import { Module } from '@nestjs/common';

import { NoteModule } from './note/note.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: "sqlite",
    database: "database.sqlite",
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: true,
  }),NoteModule],
})
export class AppModule {}

