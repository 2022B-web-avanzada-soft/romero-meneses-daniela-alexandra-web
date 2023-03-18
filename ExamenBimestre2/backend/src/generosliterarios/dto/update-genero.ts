import {IsBoolean, IsCurrency, IsInt, IsNotEmpty, IsOptional, IsString} from "class-validator";

export class UpdateGeneroDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    author: string;

    @IsOptional()
    @IsBoolean()
    isPopular: boolean;

    @IsOptional()
    @IsCurrency()
    price: number;

    @IsOptional()
    @IsInt()
    numAuthors: number;
}