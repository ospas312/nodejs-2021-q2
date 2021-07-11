import { NestFactory } from '@nestjs/core';
import { getRepository, getConnection } from 'typeorm';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { User } from './entities/user.entity';
import { AppModule } from './app.module';

import { PORT, USE_FASTIFY } from './common/config';

async function bootstrap(useFasify: string | undefined) {
  const options = new DocumentBuilder()
    .setTitle('Trello')
    .setDescription('Nestjs trello')
    .setVersion('1.0.0')
    .addTag('trello')
    .addBearerAuth()
    .build();

  if (useFasify === 'true') {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('doc', app, document);
    console.log('USE_FASTIFY')
    await app.listen(Number(PORT), '0.0.0.0');
  } else {
    const app = await NestFactory.create(AppModule);

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('doc', app, document);

    await app.listen(Number(PORT));
  }
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ login: `admin` });
  if (!user) {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([{ name: 'admin', login: 'admin', password: 'admin' }])
      .execute();
    console.log('User "Admin added in the database"');
  } else {
    console.log('User "Admin available in the database"');
  }
}
bootstrap(USE_FASTIFY);
