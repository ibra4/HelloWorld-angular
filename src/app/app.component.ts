import { Component } from '@angular/core';
import { BlogsInterface } from './Interfaces/blogs-interface';
import { BlogsService } from './services/blogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title: string;

  public blogs: Array<BlogsInterface>

  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
    this.title = 'Learning angular'

    this.blogs = this.blogsService.getData()

  }

  callMeChild(data) {
    console.log(data)
  }

}
