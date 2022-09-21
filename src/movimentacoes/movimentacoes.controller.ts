import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateMovimentacaoDto } from './dto/create-movimentacao.dto';
import { UpdateMovimentacaoDto } from './dto/update-movimentacao.dto';
import { MovimentacoesService } from './movimentacoes.service';

@Controller('movimentacoes')
export class MovimentacoesController {
  constructor(private readonly movimentacoesService: MovimentacoesService) { }

  @Post()
  create(@Body() createMovimentacoeDto: CreateMovimentacaoDto) {
    return this.movimentacoesService.create(createMovimentacoeDto);
  }

  @Get()
  findAll() {
    
    return this.movimentacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movimentacoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovimentacoeDto: UpdateMovimentacaoDto) {
    return this.movimentacoesService.update(+id, updateMovimentacoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movimentacoesService.remove(+id);
  }
}
