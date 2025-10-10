/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

// controller say 'i have a dependency'
// lookup into a ioc container
// take dependency [service object]

@Controller()
export class TestController {

  constructor(private readonly testService: TestService) { }

  @Get('/products')
  findAllProducts() {
    return 'This is a list of products';
  }

  @Get('/calc')
  calc() {
    return this.testService.add();
  }
}
