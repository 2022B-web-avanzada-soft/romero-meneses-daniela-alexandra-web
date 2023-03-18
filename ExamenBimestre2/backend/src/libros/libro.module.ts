import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Libro} from "./libro.entity";
import {LibroController} from "./libro.controller";
import {LibroService} from "./libro.service";

@Module({
    imports: [TypeOrmModule.forFeature([Libro])],
    controllers: [LibroController],
    providers: [LibroService],
    exports: [LibroService]
})
export class LibroModule {

}