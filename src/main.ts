import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //remove chaves que não estão no DTO
      forbidNonWhitelisted: true, //levantar erro quando a chave não existir
      transform: false, // = true (tenta transformar os tipos de dados de parametros e dtos)
    }),
  );
  await app.listen(3000);
}
bootstrap();
