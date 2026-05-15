import { IsJSON, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateDadoDto {
  @IsNotEmpty({ message: 'jsonValue não pode ser vazio' })
  @MaxLength(500, { message: 'JsonValue excede 500 caracteres' })
  @IsJSON({ message: 'JsonValue não é um Json Válido!' })
  jsonValue: string = '';

  @IsString(undefined, { message: 'UUID deve ser válido' })
  @IsNotEmpty({ message: 'sensorId não pode ser vazio' })
  sensorId: string = '';
}
