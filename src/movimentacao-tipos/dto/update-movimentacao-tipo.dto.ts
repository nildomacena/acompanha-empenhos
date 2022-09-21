import { PartialType } from '@nestjs/mapped-types';
import { CreateMovimentacaoTipoDto } from './create-movimentacao-tipo.dto';

export class UpdateMovimentacaoTipoDto extends PartialType(CreateMovimentacaoTipoDto) {}
