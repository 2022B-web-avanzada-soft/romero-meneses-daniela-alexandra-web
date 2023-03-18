import {IsBoolean, IsDate, IsInt, IsNotEmpty, IsOptional, IsString} from "class-validator";

export class UpdateLibroDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    author: string;

    @IsOptional()
    @IsInt()
    pageNumber: number;

    @IsOptional()
    @IsDate()
    publicationDate: Date;

    @IsOptional()
    @IsBoolean()
    isOnLibraries: boolean;
}