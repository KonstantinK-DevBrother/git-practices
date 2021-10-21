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

  getSome(){
    for(var i = 0; i<10; i++){
      console.log(i);
    }
  }
}
