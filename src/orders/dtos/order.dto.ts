import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

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
