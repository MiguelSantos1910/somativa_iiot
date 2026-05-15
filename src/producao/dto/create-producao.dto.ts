import { IsNotEmpty, IsString, MaxLength, MinLength, IsUUID, ValidationOptions, IsNumber } from "class-validator";
export class CreateProducaoDto {
    @IsString({message: 'nome deve ser string'})
    @IsNotEmpty({message: 'nome não pode ser vazio'})
    @MaxLength(100,{message: 'nome excede 100 caracteres'})  
    nome: string = "";
    
    @IsString({message: 'tempo medio deve ser string'})
    @IsNotEmpty({message: 'tipo não pode ser vazio'})
    tempo_medio_safra: string = "";

    @IsString({message: 'insumos recomendados deve ser string'})
    @IsNotEmpty({message: 'tipo não pode ser vazio'})
    insumos_recomendados: string = "";
    
    @IsUUID(undefined, {message: 'UUID deve ser válido'})
    @IsNotEmpty({ message: 'fazendaId não pode ser vazio' })
    fazendaId: string = "";
}
