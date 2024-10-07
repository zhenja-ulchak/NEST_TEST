import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class PuppeteerApiService {
  
  async GetUser(): Promise<any>{
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const posts = response.data;

      // Якщо потрібно, можете перетворити масив в об'єкт, наприклад, за id
      const postsById = posts.reduce((acc, post) => {
        acc[post.id] = post; // Встановлюємо id як ключ
        return acc;
      }, {});

      console.log('API response:', postsById); // Виводимо об'єкт в консоль
      return postsById; // Повертаємо об'єкт
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error; // Можна кинути помилку, щоб обробити її на рівні контролера
    }
  }
}
