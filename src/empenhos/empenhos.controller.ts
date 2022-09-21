import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CreateEmpenhoDto } from './dto/create-empenho.dto';
import { UpdateEmpenhoDto } from './dto/update-empenho.dto';

import { EmpenhosService } from './empenhos.service';

@Controller('empenhos')
export class EmpenhosController {

  constructor(private readonly empenhosService: EmpenhosService) { }

  @Get()
  findAll() {
    console.log('find all')
    return this.empenhosService.findAll()
  }

  @Get(':id')
  findOneById(@Param() param) {
    return this.empenhosService.findOne(param.id);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('arquivo', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          console.log(req);
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    })
  )
  create(@Body() createEmpenhoDto: CreateEmpenhoDto) {
    return this.empenhosService.create(createEmpenhoDto);
  }

  @Put(':id')
  update(@Param() param, @Body() updateEmpenhoDto: UpdateEmpenhoDto) {
    return this.empenhosService.update(param.id, updateEmpenhoDto);
  }

  @Patch(':id')
  update1(@Param() param, @Body() body) {
    return this.empenhosService.update(param.id, body);
  }
  @Delete(':id')
  delete(@Param() param) {
    console.log('delete empenho');
    return this.empenhosService.remove(param.id);
  }
}
