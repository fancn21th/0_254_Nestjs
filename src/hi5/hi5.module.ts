import { Module } from '@nestjs/common';
import { Hi5Controller } from './hi5.controller';

@Module({
  controllers: [Hi5Controller],
})
export class Hi5Module {}
