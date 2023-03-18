import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    ParseIntPipe,
    Post,
    Put
} from "@nestjs/common";
import {GeneroService} from "./genero.service";
import {CreateGeneroDto} from "./dto/create-genero";
import {validate} from "class-validator";
import {UpdateGeneroDto} from "./dto/update-genero";

@Controller('genero')
export class GeneroController {
    constructor(
        private readonly _generoService: GeneroService,
    ) {}

    @Get()
    @HttpCode(200)
    findAll() {
        return this._generoService.findAll();
    }

    @Get(':id')
    @HttpCode(200)
    findOneById(@Param('id', ParseIntPipe) id: number){
        return this._generoService.findOneById(id);
    }

    @Post()
    @HttpCode(201)
    async create(@Body() genero: any) {
        const newGenero = new CreateGeneroDto();
        newGenero.name = genero.name;
        newGenero.author = genero.author;
        newGenero.isPopular = genero.isPopular;
        newGenero.price = genero.price;
        newGenero.numAuthors = genero.numAuthors;
        const errors = await validate(newGenero);
        if (errors.length > 0) {
            console.error(errors);
            throw new BadRequestException({
                mensaje: 'Datos incorrectos'
            })
        }
        return this._generoService.create(newGenero);
    }

    @Put(':id')
    @HttpCode(200)
    async update(
        @Body() genero: any,
        @Param('id', ParseIntPipe) id: number
    ) {
        const modifiedGenero = new UpdateGeneroDto();
        modifiedGenero.name = genero.name;
        modifiedGenero.author = genero.author;
        modifiedGenero.isPopular = genero.isPopular;
        modifiedGenero.price = genero.price;
        modifiedGenero.numAuthors = genero.numAuthors;
        const errors = await validate(modifiedGenero);
        if (errors.length > 0) {
            console.error(errors);
            throw new BadRequestException({
                mensaje: 'Datos incorrectos'
            })
        }
        return this._generoService.update(id, modifiedGenero);
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this._generoService.delete(id);
    }
}