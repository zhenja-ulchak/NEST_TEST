import { Module } from '@nestjs/common';
import { PuppeteerApiService } from './puppeteer-api.service';
import { PuppeteerApiController } from './puppeteer-api.controller';

@Module({
  controllers: [PuppeteerApiController],
  providers: [PuppeteerApiService],
})
export class PuppeteerApiModule {}
