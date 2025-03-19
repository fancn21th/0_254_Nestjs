import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Hi5Module } from './hi5/hi5.module';

@Module({
  imports: [Hi5Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
