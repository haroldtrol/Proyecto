import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Config } from './configs/configuracion';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(Config.puerto);
  Logger.log(`ventas todo bien ${Config.puerto}`);
}
bootstrap();
