
import { EMPENHO_REPOSITORY } from 'src/contants';
import { DataSource } from 'typeorm';
import { Empenho } from '../entities/empenho.entity';

export const empenhosProviders = [
    {
        provide: EMPENHO_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Empenho),
        inject: ['DATA_SOURCE'],
    },
];