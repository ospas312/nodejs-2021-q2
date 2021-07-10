import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('start_port', process.env.PORT);
  console.log('start_port', process.env.POSTGRES_USER);
  const PORT = parseInt(process.env.PORT) || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
