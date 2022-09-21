import { Module } from '@nestjs/common';
import { FornecedorService } from './fornecedor.service';
import { FornecedorController } from './fornecedor.controller';
import { DatabaseModule } from 'src/database/database.module';
import { fornecedoresProviders } from './providers/fornecedor.providers';

@Module({
  controllers: [FornecedorController],
  providers: [FornecedorService, ...fornecedoresProviders],
  imports: [DatabaseModule]
})
export class FornecedorModule { }
