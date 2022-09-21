import { IsDateString, IsObject, IsString } from "class-validator";
import { Empenho } from "src/empenhos/entities/empenho.entity";
import { MovimentacaoTipo } from "src/movimentacao-tipos/entities/movimentacao-tipo.entity";

export class CreateMovimentacaoDto {
    @IsString()
    observacoes: string;
    @IsDateString()
    data: Date;
    @IsObject()
    tipoMovimentacao: MovimentacaoTipo;
    @IsObject()
    empenho: Empenho;
}
