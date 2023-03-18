import {IsBoolean, IsInt, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateGeneroDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    @IsNotEmpty()
    @IsBoolean()
    isPopular: boolean;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsInt()
    numAuthors: number;
}