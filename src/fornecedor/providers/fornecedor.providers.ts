
import { FORNECEDOR_REPOSITORY } from 'src/contants';
import { DataSource } from 'typeorm';
import { Fornecedor } from '../entities/fornecedor.entity';
export const fornecedoresProviders = [
    {
        provide: FORNECEDOR_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Fornecedor),
        inject: ['DATA_SOURCE'],
    },
];