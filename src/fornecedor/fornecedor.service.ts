import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { FORNECEDOR_REPOSITORY } from 'src/contants';
import { Repository } from 'typeorm';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';
import { Fornecedor } from './entities/fornecedor.entity';

@Injectable()
export class FornecedorService {
  constructor(
    @Inject(FORNECEDOR_REPOSITORY)
    private repository: Repository<Fornecedor>,
  ) { }

  create(createFornecedorDto: CreateFornecedorDto) {
    const fornecedor = this.repository.create(createFornecedorDto);
    return this.repository.save(fornecedor);
  }

  findAll() {
    console.log('find all');
    return this.repository.find({
      order: {
        nome: "ASC",
      }, relations: ['empenhos']
    });
  }

  async findOne(id: string) {
    const fornecedor = await this.repository.findOne({ relations: ['empenhos'], where: { id: +id } });
    if (!fornecedor) {
      throw new NotFoundException(`Fornecedor com id ${id} não encontrado`);
    }
    return fornecedor;
  }

  async update(id: string, updateFornecedorDto: UpdateFornecedorDto) {
    const fornecedor = await this.repository.preload({
      id: +id,
      ...updateFornecedorDto
    });
    if (!fornecedor) {
      throw new NotFoundException(`Fornecedor com id ${id} não encontrado`);
    }
    return this.repository.save(fornecedor);
  }


  async remove(id: string) {
    const fornecedor = await this.repository.findOne({ where: { id: +id } });
    if (!fornecedor) {
      throw new NotFoundException(`Fornecedor com id ${id} não encontrado`);
    }

    return this.repository.delete(fornecedor);
  }
}
