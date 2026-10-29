import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, ValidateNested } from "class-validator";
import { CreateEnvioDto } from "./envio.dto";
import { Type } from "class-transformer";

export class CreateOrderDto {

    @IsString()
    @IsNotEmpty()
    producto: string;

    @IsInt()
    @IsPositive()
    cantidad: number;

    @IsNumber()
    @IsPositive()
    precio: number;

    @IsString()
    @IsNotEmpty()
    Pago: string;

    @ValidateNested()
    @Type(() => CreateEnvioDto)
    @IsNotEmpty()
    envio: CreateEnvioDto;
}

export class UpdateOrderDto {

    @IsString()
    @IsNotEmpty()
    producto: string;

    @IsInt()
    @IsPositive()
    cantidad: number;

    @IsNumber()
    @IsPositive()
    precio: number;

    @IsString()
    @IsNotEmpty()
    Pago: string;
}
