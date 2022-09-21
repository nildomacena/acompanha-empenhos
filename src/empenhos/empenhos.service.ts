import { HttpException, HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { EMPENHO_REPOSITORY } from 'src/contants';
import { MovimentacaoTiposService } from 'src/movimentacao-tipos/movimentacao-tipos.service';
import { MovimentacoesService } from 'src/movimentacoes/movimentacoes.service';
import { Repository } from 'typeorm';
import { CreateEmpenhoDto } from './dto/create-empenho.dto';
import { UpdateEmpenhoDto } from './dto/update-empenho.dto';
import { Empenho } from './entities/empenho.entity';

@Injectable()
export class EmpenhosService {
  currentId = 4;

  constructor(
    @Inject(EMPENHO_REPOSITORY)
    private repository: Repository<Empenho>,
    private readonly movimentacaoService: MovimentacoesService,
    private readonly mtService: MovimentacaoTiposService,
  ) { }

  findAll() {
    return this.repository.find({ relations: ['fornecedor', 'movimentacoes', 'movimentacoes.tipoMovimentacao'] });
  }

  async findOne(id: string) {
    const empenho = await this.repository.findOne({ where: { id: +id }, relations: ['fornecedor', 'movimentacoes', 'movimentacoes.tipoMovimentacao'] });
    if (!empenho) {
      throw new NotFoundException(`Empenho com id ${id} não encontrado`);
    }
    return empenho;
  }

  async create(createEmpenhoDto: CreateEmpenhoDto) {
    const tipoMovimentacao = await this.mtService.findOne(8);
    let empenho = this.repository.create(createEmpenhoDto);
    empenho = await this.repository.save(empenho);
    this.movimentacaoService.create({ data: new Date(), empenho: empenho, observacoes: '', tipoMovimentacao: tipoMovimentacao });
    return this.findOne(empenho.id.toString());
  }

  async update(id: string, updateEmpenhoDto: UpdateEmpenhoDto) {
    const empenho = await this.repository.preload({
      id: +id,
      ...updateEmpenhoDto
    });
    if (!empenho) {
      throw new NotFoundException(`Empenho com id ${id} não encontrado`);
    }
    return this.repository.save(empenho);
  }

  async remove(id: string) {
    const empenho = await this.repository.findOne({ where: { id: +id } });
    if (!empenho) {
      throw new HttpException(`Empenho com id ${id} não encontrado`, HttpStatus.NOT_FOUND);
    }
    const movimentacoes = await this.movimentacaoService.getMovimentacoesByEmpenho(empenho);
    if (movimentacoes.length > 0) {
      await Promise.all(movimentacoes.map((m) => this.movimentacaoService.remove(m.id)));
    }
    const result = await this.repository.remove(empenho);
    return result;
  }
}
