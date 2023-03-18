import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.enity";
import {UsuarioService} from "./usuario.service";
import {UsuarioController} from "./usuario.controller";

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [UsuarioEntity], //Entidad en este modulo
        ),
    ],
    providers: [UsuarioService],
    exports: [UsuarioService],
    controllers: [UsuarioController]
})
export class UsuarioModule{

}