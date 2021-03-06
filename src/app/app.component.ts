import { Component } from '@angular/core';
import { BlogsInterface } from './Interfaces/blogs-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title: string;

  public blogs: Array<BlogsInterface>

  ngOnInit() {
    this.title = 'Learning angular'

    this.getBlogs()

  }

  getBlogs() {
    this.blogs = [
      {
        id: 1,
        title: 'title 1',
        description: 'description 1',
        published: true
      },
      {
        id: 2,
        title: 'title 2',
        description: 'description 2',
        published: false
      },
      {
        id: 3,
        title: 'title 3',
        description: 'description 3',
        published: true
      }
    ]
  }



}
