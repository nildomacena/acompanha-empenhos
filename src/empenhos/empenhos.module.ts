import { Module } from '@nestjs/common';
import { EmpenhosService } from './empenhos.service';
import { EmpenhosController } from './empenhos.controller';
import { empenhosProviders } from './providers/empenho.providers';
import { DatabaseModule } from 'src/database/database.module';
import { MovimentacoesModule } from 'src/movimentacoes/movimentacoes.module';
import { MovimentacaoTiposModule } from 'src/movimentacao-tipos/movimentacao-tipos.module';

@Module({
  controllers: [EmpenhosController],
  providers: [...empenhosProviders, EmpenhosService],
  imports: [DatabaseModule, MovimentacoesModule, MovimentacaoTiposModule]
})
export class EmpenhosModule { }
