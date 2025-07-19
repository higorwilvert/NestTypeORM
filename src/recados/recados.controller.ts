import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RecadosService } from './recados.service';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @Get()
  findAll() {
    return this.recadosService.findAll();
  }

  @Get(':id')
  findUnique(@Param('id') id: number) {
    console.log(id);
    return this.recadosService.findOne(id);
  }

  @Get('usandoQuery')
  findAllComQuery(@Query() pagination: any) {
    console.log(pagination);
    return 'retorna todos os recados da query ';
  }

  @Post()
  create(@Body() recado: any) {
    console.log(recado);
    return this.recadosService.create(recado);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.recadosService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.recadosService.remove(id);
  }
}
