import {Body, Controller, Get, Post} from '@nestjs/common';
import {NoteService} from "./note.service";

@Controller('note')
export class NoteController {
    constructor(private noteservice: NoteService) {
    }
    @Get()
    getAll() {
        return this.noteservice.findAll();
    }
    @Post()
    create(@Body('title') title: string)  {
        return this.noteservice.create(title)
    }}
    