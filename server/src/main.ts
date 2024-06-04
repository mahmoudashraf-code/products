import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'express';

async function bootstrap() {
  let app = await NestFactory.create(AppModule, {
    logger: ['error']
  });
  app.enableCors()
  app.use(json({ limit: '300mb' }));
  app.use(urlencoded({ extended: true, limit: '300mb' }));
  await app.listen(3000);
}
bootstrap();
