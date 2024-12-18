import { Injectable } from '@nestjs/common';
import {NoteEntity} from "./entites/note.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class NoteService {
    constructor(@InjectRepository(NoteEntity) private noteRepository: Repository<NoteEntity>) {
    }
    findAll() {
        return this.noteRepository.find()
    }


    create(title: string) {
        let note: NoteEntity
        note.title = title
        return this.noteRepository.save(note)
    }
}
