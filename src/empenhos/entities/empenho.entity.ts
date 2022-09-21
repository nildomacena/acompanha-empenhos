import { Fornecedor } from "src/fornecedor/entities/fornecedor.entity";
import { Movimentacao } from "src/movimentacoes/entities/movimentacao.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('empenhos')
export class Empenho {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    numero: string;
    @Column()
    descricao: string;
    @Column()
    valor: number;
    @Column()
    data: Date
    @Column({nullable: true})
    url: string;
    @ManyToOne(() => Fornecedor)
    fornecedor: Fornecedor;
    @OneToMany(() => Movimentacao, (movimentacao) => movimentacao.empenho)
    movimentacoes: Movimentacao[];

}