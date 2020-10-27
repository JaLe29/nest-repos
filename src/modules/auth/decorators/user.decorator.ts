import { createParamDecorator } from '@nestjs/common'
import get from 'lodash/get'

export const CurrentUser = createParamDecorator((_, req): any => get(req, 'args[2].req.user'))

export const CurrentUserRest = createParamDecorator((empty, reqArgs: any) => reqArgs.args[1].req.user)
