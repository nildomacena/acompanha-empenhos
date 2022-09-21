import { Empenho } from "src/empenhos/entities/empenho.entity";
import { MovimentacaoTipo } from "src/movimentacao-tipos/entities/movimentacao-tipo.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('movimentacoes')
export class Movimentacao {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: true })
    observacoes: string;
    @Column()
    data: Date;
    @ManyToOne(() => MovimentacaoTipo)
    tipoMovimentacao: MovimentacaoTipo;
    @ManyToOne(() => Empenho)
    empenho: Empenho
}
