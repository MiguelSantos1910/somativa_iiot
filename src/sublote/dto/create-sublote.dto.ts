import { IsNotEmpty, IsString, MaxLength, MinLength, IsUUID, ValidationOptions, IsNumber } from "class-validator";
export class CreateSubloteDto {
    @IsString({message: 'nome deve ser string'})
    @IsNotEmpty({message: 'nome não pode ser vazio'})
    @MaxLength(100,{message: 'nome excede 100 caracteres'})  
    nome: string = "";
    
    @IsNumber({message: 'tipo deve ser number'})
    @IsNotEmpty({message: 'tipo não pode ser vazio'})
    area_total: int = 0;
    
    @IsUUID(undefined, {message: 'UUID deve ser válido'})
    @IsNotEmpty({ message: 'fazendaId não pode ser vazio' })
    fazendaId: string = "";
}
