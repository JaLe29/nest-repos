// import 'module-alias/register'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './modules/app/app.module'
import cors from 'cors'
import { ValidationPipe } from '@nestjs/common'
import { ENV_PORT } from 'const/env'
import { v4 as uuidv4 } from 'uuid';
import { ContextService } from 'modules/core/context/context.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const contextService = app.get(ContextService)

  let counter = 1

  const contextMiddleware = (req: Request, res: Response, next: Function) => {
    const reqId = `dc-${uuidv4()}`
    req.headers['server-side-dc-id'] = reqId

    const demoContext = { foo: counter++ }
    contextService.setContext(reqId, demoContext)

    res.on('finish', () => {
      contextService.clearContext(reqId)
    })

    next()
  }

  // Use CORS
  app.use(cors())
  app.use(contextMiddleware)

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  )

  // Listen on defined port
  await app.listen(ENV_PORT, '0.0.0.0')
}

bootstrap()
