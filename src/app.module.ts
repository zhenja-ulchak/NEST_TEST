import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PuppeteerModule } from './puppeteer/puppeteer.module';
import { PuppeteerApiModule } from './puppeteer-api/puppeteer-api.module';

@Module({
  imports: [UsersModule, PuppeteerModule, PuppeteerApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
