import { LazyModuleLoader, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TareaModule } from './modules/tarea/tarea.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const lazyModuleLoader = app.get(LazyModuleLoader);

  app.setGlobalPrefix('api')

  await app.listen(3000);
}
bootstrap();
