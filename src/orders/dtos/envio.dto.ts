import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateEnvioDto {
    @IsString()
    @IsNotEmpty()
    direccion: string;

    @IsString()
    @IsNotEmpty()
    ciudad: string;

    @IsString()
    @IsOptional()
    barrio: string;

    @IsString()
    @IsOptional()
    indicaciones: string;
}
