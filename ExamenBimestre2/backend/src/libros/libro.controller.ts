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
import {LibroService} from "./libro.service";
import {CreateLibroDto} from "./dto/create-libro";
import {validate} from "class-validator";
import {UpdateLibroDto} from "./dto/update-libro";

@Controller('libro')
export class LibroController {
    constructor(private readonly libroService: LibroService) {}

    @Get()
    @HttpCode(200)
    async findAll() {
        return this.libroService.findAll();
    }

    @Get(':id')
    @HttpCode(200)
    async findById(@Param('id', ParseIntPipe) id: number) {
        return this.libroService.findById(id);
    }

    @Post()
    @HttpCode(201)
    async create(
        @Body() libro: any
    ) {
        const newLibro = new CreateLibroDto();
        newLibro.name = libro.name;
        newLibro.author = libro.author;
        newLibro.pageNumber = libro.pageNumber;
        newLibro.publicationDate = libro.publicationDate;
        newLibro.isOnLibraries = libro.isOnLibraries;
        newLibro.genero = libro.genero;
        const errors = await validate(newLibro);
        if (errors.length > 0) {
            console.error(errors);
            throw new BadRequestException({
                mensaje: 'Datos incorrectos'
            })
        }
        return this.libroService.create(libro);
    }

    @Put(':id')
    @HttpCode(200)
    async update(
        @Body() libro: any,
        @Param('id', ParseIntPipe) id: number
    ) {
        const modifiedLibro = new UpdateLibroDto();
        modifiedLibro.name = libro.name;
        modifiedLibro.author = libro.author;
        modifiedLibro.pageNumber = libro.pageNumber;
        modifiedLibro.publicationDate = libro.publicationDate;
        modifiedLibro.isOnLibraries = libro.isOnLibraries;
        const errors = await validate(modifiedLibro);
        if (errors.length > 0) {
            console.error(errors);
            throw new BadRequestException({
                mensaje: 'Datos incorrectos'
            })
        }
        return this.libroService.update(id, libro);
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.libroService.delete(id);
    }
}
