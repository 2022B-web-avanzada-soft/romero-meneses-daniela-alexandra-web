import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Genero} from "../generosliterarios/genero.entity";

@Entity()
export class Libro{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        length: 50,
        type: "varchar",
    })
    name: string;
    @Column({
        length: 50,
        type: "varchar",
    })
    author: string;
    @Column({
        type: "int",
        name: "page_number",
    })
    pageNumber: number;
    @Column({
        type: "date",
        name: "publication_date",
    })
    publicationDate: Date;
    @Column({
        type: "boolean",
        name: "is_Libraries",
    })
    isOnLibraries: boolean;
    @ManyToOne(
        () => Genero,
        genero => genero.libros,
        {
            onDelete: "SET NULL",
        }
    )
    @JoinColumn({
        name: "genero_id",
    })
    genero: Genero;
}