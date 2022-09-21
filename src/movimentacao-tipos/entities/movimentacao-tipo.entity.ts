import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movimentacoesTipos')
export class MovimentacaoTipo {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    descricao: string;
}
