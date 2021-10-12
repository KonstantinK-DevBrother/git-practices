import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getHello() {
    return {
      title: 'Git practices',
      version: '0.0.0',
      description: 'lorem ipsum',
      author: 'KK',
    };
  }
}
