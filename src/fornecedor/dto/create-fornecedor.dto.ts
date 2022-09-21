import { IsEmail, IsString } from "class-validator";

export class CreateFornecedorDto {
    @IsString()
    nome: string;
    @IsString()
    @IsEmail()
    email: string;
    @IsString()
    cnpj: string;
    @IsString()
    telefone: string;
}
