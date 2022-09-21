
import { MOVIMENTACAO_TIPO_REPOSITORY } from 'src/contants';
import { DataSource } from 'typeorm';
import { MovimentacaoTipo } from '../entities/movimentacao-tipo.entity';
export const movimentacaoTipoProviders = [
    {
        provide: MOVIMENTACAO_TIPO_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(MovimentacaoTipo),
        inject: ['DATA_SOURCE'],
    },
];