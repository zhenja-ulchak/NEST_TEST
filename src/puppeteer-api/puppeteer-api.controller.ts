import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PuppeteerApiService } from './puppeteer-api.service';


@Controller('puppeteer-api')
export class PuppeteerApiController {
  constructor(private PuppeteerApiService: PuppeteerApiService) {}

  @Get('post')
  async getUser() {
    return this.PuppeteerApiService.GetUser();
  }
}
