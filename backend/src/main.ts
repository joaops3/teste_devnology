import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {AllExceptionsFilter} from "./app/common/filters/http-exception.filter"
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalFilters(new AllExceptionsFilter())
  app.enableCors()
  await app.listen(3333);
}
bootstrap();
