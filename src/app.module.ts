import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpenhosModule } from './empenhos/empenhos.module';
import { DatabaseModule } from './database/database.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { MovimentacoesModule } from './movimentacoes/movimentacoes.module';
import { MovimentacaoTiposModule } from './movimentacao-tipos/movimentacao-tipos.module';

@Module({
  imports: [
    EmpenhosModule,
    DatabaseModule,
    FornecedorModule,
    MovimentacoesModule,
    MovimentacaoTiposModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
