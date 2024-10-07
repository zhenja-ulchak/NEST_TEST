import { Injectable } from '@nestjs/common';
import axios from 'axios';
import puppeteer from 'puppeteer';
// import { CreatePuppeteerApiDto } from './dto/puppeteer-api.dto';
@Injectable()
export class PuppeteerApiService {
  
  async GetUser(): Promise<any>{
    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();
  
    // // Navigate the page to a URL
    // await page.goto('https://jsonplaceholder.typicode.com');
  
    // // Set screen size
    // await page.setViewport({width: 1080, height: 1024});
  
    // // Type into search box
    // await page.type('.devsite-search-field', 'automate beyond recorder');

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log('API response:', response.data);

    const post = response.data
  }
}
