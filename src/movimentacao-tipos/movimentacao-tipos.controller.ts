import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovimentacaoTiposService } from './movimentacao-tipos.service';
import { CreateMovimentacaoTipoDto } from './dto/create-movimentacao-tipo.dto';
import { UpdateMovimentacaoTipoDto } from './dto/update-movimentacao-tipo.dto';

@Controller('movimentacao-tipos')
export class MovimentacaoTiposController {
  constructor(private readonly movimentacaoTiposService: MovimentacaoTiposService) {}

  @Post()
  create(@Body() createMovimentacaoTipoDto: CreateMovimentacaoTipoDto) {
    return this.movimentacaoTiposService.create(createMovimentacaoTipoDto);
  }

  @Get()
  findAll() {
    return this.movimentacaoTiposService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movimentacaoTiposService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovimentacaoTipoDto: UpdateMovimentacaoTipoDto) {
    return this.movimentacaoTiposService.update(+id, updateMovimentacaoTipoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movimentacaoTiposService.remove(+id);
  }
}
