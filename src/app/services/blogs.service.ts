import { Injectable } from '@angular/core';
import { BlogsInterface } from '../Interfaces/blogs-interface';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor() { }

  getData(): Array<BlogsInterface> {
    return [
      {
        id: 1,
        title: 'title 1',
        description: 'description 1',
        date: Date.now(),
        published: true,
        price: 300
      },
      {
        id: 2,
        title: 'title 2',
        description: 'description 2',
        date: Date.now(),
        published: false
      },
      {
        id: 3,
        title: 'title 3',
        description: 'description 3',
        date: Date.now(),
        published: true,
        price: 1950
      }
    ]
  }
}
