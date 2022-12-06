import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  CorsOptions,
  CorsOptionsDelegate,
} from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Mosaique Parser')
    .setDescription('Template handler and parser for Mosaique Decentralized Workflows')
    .setVersion('1.0')
    .addTag('Parser')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const corsOptions: CorsOptions = {
    allowedHeaders: ['origin', 'x-requested-with', 'content-type', 'accept', 'authorization'],
    credentials: false,
    origin: ['*'],
  }
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
