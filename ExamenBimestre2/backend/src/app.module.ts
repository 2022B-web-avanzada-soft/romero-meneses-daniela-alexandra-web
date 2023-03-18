import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {Libro} from "./libros/libro.entity";
import {Genero} from "./generosliterarios/genero.entity";
import {LibroModule} from "./libros/libro.module";
import {GeneroModule} from "./generosliterarios/genero.module";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './bdd/libreria.sqlite',
      entities: [Libro, Genero],
      synchronize: true,
      dropSchema: false,
    }),
    LibroModule,
    GeneroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
