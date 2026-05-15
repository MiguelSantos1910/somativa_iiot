import { IsNotEmpty, IsString, MaxLength, IsUUID } from 'class-validator';

export class CreateSafraDto {
  @IsString({ message: 'tipo_lotes deve ser string' })
  @IsNotEmpty({ message: 'tipo_lotes não pode ser vazio' })
  @MaxLength(100, { message: 'tipo_lotes excede 100 caracteres' })
  tipo_lotes: string = '';

  @IsString({ message: 'tipo_Sublotes deve ser string' })
  @IsNotEmpty({ message: 'tipo_sublotes não pode ser vazio' })
  @MaxLength(100, { message: 'tipo_sublotes excede 100 caracteres' })
  tipo_sublotes: string = '';

  @IsUUID(undefined, { message: 'UUID deve ser válido' })
  @IsNotEmpty({ message: 'producaoId não pode ser vazio' })
  producaoId: string = '';
}
