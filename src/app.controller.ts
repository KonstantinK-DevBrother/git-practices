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
  updateTitle(
    @Query('title') title: string) {
    this.title = title;
  }
   
  getSome(){
    for(var i = 0; i<10; i++){
      console.log(i);
    }
  }
  addAuthor(){
    for(var i = 0; i<10; i++){
      console.log(i);
    }
  }
}
