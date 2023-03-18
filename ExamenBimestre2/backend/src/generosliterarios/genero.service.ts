import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Genero} from "./genero.entity";
import {UpdateGeneroDto} from "./dto/update-genero";
import {CreateGeneroDto} from "./dto/create-genero";
import {Repository} from "typeorm";

@Injectable()
export class GeneroService {
    constructor(
        @InjectRepository(Genero)
        private readonly _generoRepository: Repository<Genero>,
    ) {}

    findAll(): Promise<Genero[]> {
        return this._generoRepository.find({
            relations: ['libros']
        });
    }

    findOneById(id: number): Promise<Genero> {
        return this._generoRepository.findOne({
            where: {
                id: id
            },
            relations: ['libros']
        });
    }

    delete(id: number): any {
        return this._generoRepository.delete(id);
    }

    create(genero: CreateGeneroDto): Promise<Genero> {
        return this._generoRepository.save(genero);
    }

    update(id: number, genero: UpdateGeneroDto): Promise<Genero> {
        return this._generoRepository.save({
            ...genero, id
        });
    }
}