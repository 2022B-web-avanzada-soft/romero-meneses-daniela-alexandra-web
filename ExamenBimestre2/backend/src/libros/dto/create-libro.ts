import {IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateLibroDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    @IsNotEmpty()
    @IsInt()
    pageNumber: number;

    @IsNotEmpty()
    @IsDateString()
    publicationDate: Date;

    @IsNotEmpty()
    @IsBoolean()
    isOnLibraries: boolean;

    @IsNotEmpty()
    @IsNumber()
    genero:number;
}