import { Module } from '@nestjs/common';
import { MovimentacoesService } from './movimentacoes.service';
import { MovimentacoesController } from './movimentacoes.controller';
import { DatabaseModule } from 'src/database/database.module';
import { movimentacaoProviders } from './providers/movimentacao-tipo.providers';

@Module({
  controllers: [MovimentacoesController],
  providers: [MovimentacoesService, ...movimentacaoProviders],
  imports: [DatabaseModule],
  exports: [MovimentacoesService]

})
export class MovimentacoesModule { }
