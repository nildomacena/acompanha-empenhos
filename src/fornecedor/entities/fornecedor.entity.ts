import { Empenho } from "src/empenhos/entities/empenho.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('fornecedores')
export class Fornecedor {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nome: string;
    @Column()
    email: string;
    @Column()
    cnpj: string;
    @Column()
    telefone: string;
    @OneToMany(() => Empenho, (empenho) => empenho.fornecedor)
    empenhos: Empenho[]
}
