import { Injectable } from '@nestjs/common';
import { join } from 'path';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PuppeteerService {
    async getInfo(url: string): Promise<any> {
        let browser: puppeteer.Browser;

        try {
            // Запуск нового браузера
            browser = await puppeteer.launch({ headless: true }); // Використання безголового режиму

            // Створення нової вкладки
            const page = await browser.newPage();

            // Перехід на вказану URL-адресу
            await page.goto(url, { waitUntil: 'networkidle2' }); // Чекати, поки мережеві запити завершаться

            // Заповнення поля вводу значенням "value"
            const inputElement = await page.$('input'); // Отримання елемента input
            if (inputElement) {
                await inputElement.type('value'); // Заповнення поля
            } else {
                throw new Error('Input element not found');
            }

            await page.evaluate(() => {
                const elements = document.querySelectorAll('h1'); // Вибираємо всі заголовки h1
                elements.forEach(element => {
                    (element as HTMLElement).style.color = 'red'; // Змінюємо колір тексту на червоний
                    (element as HTMLElement).style.fontSize = '30px'; // Змінюємо розмір шрифту
                });
                const bgColor = document.querySelector('.mui-gx2jte');
                if (bgColor) {
                    (bgColor as HTMLElement).style.backgroundColor = 'blue'; // Змінюємо фон на синій
                    (bgColor as HTMLElement).style.color = 'white'; // Змінюємо колір тексту на білий
                }
            });

            // Додайте сюди логіку для отримання даних з веб-сторінки, якщо потрібно

            // Повернення успішного повідомлення
            const screenshotPath = join(__dirname, 'screenshot.png'); // Задайте шлях для зберігання скріншота
            await page.screenshot({ path: screenshotPath });

            return { message: 'Input filled successfully' , screenshot: screenshotPath  };
        } catch (error) {
            console.error('Error occurred while processing:', error);
            throw new Error('Failed to fill input');
        } finally {
            // Закриття браузера
            if (browser) {
                await browser.close();
            }
        }
    }
}
