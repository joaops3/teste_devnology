import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from "./app/common/filters/http-exception.filter"
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  app.useGlobalPipes(new ValidationPipe());
 
  app.useGlobalFilters(new AllExceptionsFilter())

  const config = new DocumentBuilder().addBearerAuth()
    .setTitle('devnology api example')
    .setDescription('The  API description')
    .setVersion('1.0')
    .addTag('api/user')
    .addTag('api/link')
    .addTag("api/auth")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors()
  await app.listen(3333);
}
bootstrap();
