import { Controller, Get, Post, Query } from '@nestjs/common';

@Controller()
export class AppController {

  title = 'Git practices';

  @Get()
  getHello() {
    return {
      title: this.title,
      version: '0.0.0',
      description: 'lorem ipsum',
      author: 'KK',
    };
  }

  @Post()
  updateTitle(@Query('title') title: string) {
    this.title = title;
  }
}
