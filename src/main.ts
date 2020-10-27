// import 'module-alias/register'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './modules/app/app.module'
import cors from 'cors'
import { ValidationPipe } from '@nestjs/common'
import { ENV_PORT } from 'const/env'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Use CORS
  app.use(cors())

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  )

  // Listen on defined port
  await app.listen(ENV_PORT, '0.0.0.0')
}

bootstrap()
