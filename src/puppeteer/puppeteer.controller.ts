import { Controller, Get, Query } from '@nestjs/common';
import { PuppeteerService } from './puppeteer.service';

@Controller('puppeteer')
export class PuppeteerController {
    constructor(private readonly puppeteerService: PuppeteerService) {}

    @Get('get-info')
    async getInfo(@Query('url') url: string): Promise<any> {
        if (!url) {
            return { error: 'URL is required' };
        }

        try {
            const result = await this.puppeteerService.getInfo(url);
            return result;
        } catch (error) {
            return { error: error.message || 'An error occurred' };
        }
    }
}
