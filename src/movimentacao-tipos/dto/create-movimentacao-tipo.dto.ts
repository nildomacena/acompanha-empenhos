import { IsString } from "class-validator";

export class CreateMovimentacaoTipoDto {
    @IsString()
    descricao: string;
}
