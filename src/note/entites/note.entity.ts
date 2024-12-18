import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class NoteEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string   
    
    @Column()
    description: string
    
}
