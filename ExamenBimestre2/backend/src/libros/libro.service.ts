import {UpdateLibroDto} from "./dto/update-libro";
import {Injectable} from "@nestjs/common";
import {Libro} from "./libro.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class LibroService {
    constructor(
        @InjectRepository(Libro)
        private readonly _LibroRepository: Repository<Libro>,
    ) {}

    findAll(): Promise<Libro[]> {
        return this._LibroRepository.find({
            relations: ['genero']
        });
    }

    findById(id: number): Promise<Libro> {
        return this._LibroRepository.findOne({
            where: {
                id: id
            },
            relations: ['genero']
        });
    }

    delete(id: number): Promise<any> {
        return this._LibroRepository.delete(id)
    }

    create(Libro: any): Promise<any> {
        return this._LibroRepository.save(Libro);
    }

    update(id: number, Libro: UpdateLibroDto): Promise<Libro> {
        return this._LibroRepository.save({
            ...Libro, id
        })
    }
}