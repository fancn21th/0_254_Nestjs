import { Controller, Get } from '@nestjs/common';

@Controller('hi5')
export class Hi5Controller {
  @Get()
  findAll() {
    return 'Hi5';
  }
}
