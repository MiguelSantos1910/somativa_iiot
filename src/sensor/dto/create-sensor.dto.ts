import { IsNotEmpty, IsString, MaxLength, MinLength, IsUUID, ValidationOptions } from "class-validator";

export class CreateSensorDto {
    @IsString({message: 'nome deve ser string'})
    @IsNotEmpty({message: 'nome não pode ser vazio'})
    @MaxLength(100,{message: 'nome excede 100 caracteres'})  
    nome: string = "";

    @IsString({message: 'tipo deve ser string'})
    @IsNotEmpty({message: 'tipo não pode ser vazio'})
    @MaxLength(50,{message: 'tipo excede 50 caracteres'})
    @MinLength(5,{message: 'tipo deve ser maior que 5 caracteres'})  
    tipo: string = "";

    @IsUUID(undefined, {message: 'UUID deve ser válido'})
    @IsNotEmpty({message: 'fazendaId não pode ser vazio'})
    fazendaId: string = "";
}