import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
import { Recado } from './entities/recado.entity';

@Injectable()
export class RecadosService {
  private lastId: number = 1;
  private recados: Recado[] = [
    {
      id: 1,
      texto: 'isso é um teste',
      de: 'servidor',
      para: 'higor',
      lido: false,
      data: new Date(),
    },
  ];

  findAll() {
    console.log(this.recados);
    return this.recados;
  }

  findOne(id: number) {
    const recado = this.recados.find((rec) => rec.id === id);

    if (recado) return recado;

    throw new NotFoundException();
  }

  create(createRecadoDto: CreateRecadoDto) {
    this.lastId++;
    const id = this.lastId;
    const newRecado = {
      id,
      ...createRecadoDto,
      lido: false,
      data: new Date(),
    };
    this.recados.push(newRecado);
    return newRecado;
  }

  update(id: number, updateRecadoDto: UpdateRecadoDto) {
    console.log(id);
    const recadoExisteIndex = this.recados.findIndex((item) => item.id === id);
    console.log(recadoExisteIndex);

    if (recadoExisteIndex >= 0) {
      const recaodExistente = this.recados[recadoExisteIndex];

      this.recados[recadoExisteIndex] = {
        ...recaodExistente,
        ...updateRecadoDto,
      };
    }

    return this.recados[recadoExisteIndex];
  }

  remove(id: number) {
    const recadoExisteIndex = this.recados.findIndex((item) => item.id === id);

    if (recadoExisteIndex >= 0) {
      this.recados.splice(recadoExisteIndex, 1);
    }
  }
}
