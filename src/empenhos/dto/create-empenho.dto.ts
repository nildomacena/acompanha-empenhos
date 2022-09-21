import { IsArray, IsDateString, IsNumber, IsObject, IsString } from "class-validator";
import { Fornecedor } from "src/fornecedor/entities/fornecedor.entity";
import { Movimentacao } from "src/movimentacoes/entities/movimentacao.entity";

export class CreateEmpenhoDto {
    @IsString()
    readonly numero: string;
    @IsObject()
    readonly fornecedor: Fornecedor;
    @IsString()
    readonly descricao: string;
    @IsString()
    readonly url: string;
    @IsNumber()
    readonly valor: number;
    @IsDateString()
    readonly data: Date;
    @IsArray()
    movimentacoes: Movimentacao[]

}
