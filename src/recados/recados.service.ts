import { Injectable } from '@nestjs/common';
import { Recado } from './entities/recado.entity';

@Injectable()
export class RecadosService {
  private lastId = 1;
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
    return this.recados.find((rec) => rec.id === +id);
  }

  create(createRecado: any) {
    this.lastId++;
    const id = this.lastId;
    const newRecado = {
      id,
      ...createRecado,
    };
    this.recados.push(newRecado);
    return newRecado;
  }

  update(id: number, body: any) {
    console.log(id);
    const recadoExisteIndex = this.recados.findIndex((item) => item.id === +id);
    console.log(recadoExisteIndex);

    if (recadoExisteIndex >= 0) {
      const recaodExistente = this.recados[recadoExisteIndex];

      this.recados[recadoExisteIndex] = {
        ...recaodExistente,
        ...body,
      };
    }

    console.log(this.recados[recadoExisteIndex]);
  }

  remove(id: number) {
    console.log(id);
    const recadoExisteIndex = this.recados.findIndex((item) => item.id === +id);
    console.log(recadoExisteIndex);

    if (recadoExisteIndex >= 0) {
      this.recados.splice(recadoExisteIndex, 1);
    }
  }
}
