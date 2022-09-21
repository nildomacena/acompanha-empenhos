import { Module } from '@nestjs/common';
import { MovimentacaoTiposService } from './movimentacao-tipos.service';
import { MovimentacaoTiposController } from './movimentacao-tipos.controller';
import { movimentacaoTipoProviders } from './providers/movimentacao-tipo.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [MovimentacaoTiposController],
  providers: [MovimentacaoTiposService, ...movimentacaoTipoProviders],
  imports: [DatabaseModule],
  exports: [MovimentacaoTiposService]
})
export class MovimentacaoTiposModule { }
