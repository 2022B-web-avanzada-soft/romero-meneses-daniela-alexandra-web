import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EventosModule} from "./eventos/eventos.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.enity";
import {UsuarioModule} from "./usuario/usuario.module";

@Module({
  imports: [ //Importamos de otros modulos
    EventosModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './bdd/bdd.sqlite',
      entities: [
          UsuarioEntity,
      ], //entidades en TODO el aplicativo
      synchronize: true, // true => edita las columnas y tablas // false => nada
      dropSchema: false, //true => borra toda la base de datos !!!!  // false => nada
    }),
      UsuarioModule
  ], //Otros modulos - Agrupador
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

