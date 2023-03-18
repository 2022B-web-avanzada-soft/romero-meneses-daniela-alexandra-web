import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Libro} from "../libros/libro.entity";

@Entity()
export class Genero{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        length: 50,
        type: "varchar",
    })
    name: string;
    @Column({
        length:100,
        type: "varchar",
    })
    author: string;
    @Column({
        type: "boolean",
        name:"is_popular"
    })
    isPopular: boolean;
    @Column({
        type: "double",
        name: "estimated_price"
    })
    price: number;
    @Column({
        type: "int",
        name: "number_authors"
    })
    numAuthors: number;
    @OneToMany(
        () => Libro,
        libro => libro.genero,
        {
            onDelete: "SET NULL",
        }
    )
    libros: Libro[];
}