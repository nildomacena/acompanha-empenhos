import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { MOVIMENTACAO_TIPO_REPOSITORY } from 'src/contants';
import { Repository } from 'typeorm';
import { CreateMovimentacaoTipoDto } from './dto/create-movimentacao-tipo.dto';
import { UpdateMovimentacaoTipoDto } from './dto/update-movimentacao-tipo.dto';
import { MovimentacaoTipo } from './entities/movimentacao-tipo.entity';

@Injectable()
export class MovimentacaoTiposService {

  constructor(@Inject(MOVIMENTACAO_TIPO_REPOSITORY)
  private repository: Repository<MovimentacaoTipo>) { }

  create(createMovimentacaoTipoDto: CreateMovimentacaoTipoDto) {
    const movimentacaoTipo = this.repository.create(createMovimentacaoTipoDto);
    return this.repository.save(movimentacaoTipo);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    const movimentacaoTipo = await this.repository.findOne({ where: { id: id } });
    if (!movimentacaoTipo) {
      throw new NotFoundException(`Tipo de movimentação com id ${id} não encontrado`);
    }
    return movimentacaoTipo;
  }

  async update(id: number, updateMovimentacaoTipoDto: UpdateMovimentacaoTipoDto) {
    const movimentacaoTipo = await this.repository.preload({
      id: +id,
      ...updateMovimentacaoTipoDto
    });
    if (!movimentacaoTipo) {
      throw new NotFoundException(`Fornecedor com id ${id} não encontrado`);
    }
    return this.repository.save(movimentacaoTipo);
  }

  async remove(id: number) {
    const movimentacaoTipo = await this.repository.findOne({ where: { id: id } });
    if (!movimentacaoTipo) {
      throw new NotFoundException(`Fornecedor com id ${id} não encontrado`);
    }

    return this.repository.delete(movimentacaoTipo);
  }
}
