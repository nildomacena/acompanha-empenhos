import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { MOVIMENTACAO_REPOSITORY } from 'src/contants';
import { Empenho } from 'src/empenhos/entities/empenho.entity';
import { Repository } from 'typeorm';
import { CreateMovimentacaoDto } from './dto/create-movimentacao.dto';
import { UpdateMovimentacaoDto } from './dto/update-movimentacao.dto';
import { Movimentacao } from './entities/movimentacao.entity';

@Injectable()
export class MovimentacoesService {

  constructor(@Inject(MOVIMENTACAO_REPOSITORY)
  private repository: Repository<Movimentacao>) { }

  create(createMovimentacaoDto: CreateMovimentacaoDto) {
    const movimentacao = this.repository.create(createMovimentacaoDto);
    return this.repository.save(movimentacao);
  }

  findAll() {
    return this.repository.find({ relations: ['tipoMovimentacao'], });
  }

  async findOne(id: number) {
    const movimentacao = await this.repository.findOne({ relations: ['tipoMovimentacao'], where: { id: id } });
    if (!movimentacao) {
      throw new NotFoundException(` de movimentação com id ${id} não encontrado`);
    }
    return movimentacao;
  }

  async update(id: number, updateMovimentacaoDto: UpdateMovimentacaoDto) {
    const movimentacao = await this.repository.preload({
      id: +id,
      ...updateMovimentacaoDto
    });
    if (!movimentacao) {
      throw new NotFoundException(`Fornecedor com id ${id} não encontrado`);
    }
    return this.repository.save(movimentacao);
  }

  async remove(id: number) {

    const movimentacao = await this.repository.findOne({ where: { id: id } });
    if (!movimentacao) {
      throw new NotFoundException(`Fornecedor com id ${id} não encontrado`);
    }

    return this.repository.delete(movimentacao);
  }

  getMovimentacoesByEmpenho(empenho: Empenho) {
    return this.repository.find({ where: { empenho: empenho } });
  }
}
