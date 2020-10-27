import { createParamDecorator } from '@nestjs/common'

export const DemoDecorator = createParamDecorator((_, req): any => {
  console.log(req)
  return { msg: 'ahoj' }
})
