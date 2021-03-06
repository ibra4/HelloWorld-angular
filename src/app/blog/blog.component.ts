import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlogsInterface } from '../Interfaces/blogs-interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() blog: BlogsInterface

  @Output() callMeChild: EventEmitter<BlogsInterface> = new EventEmitter()

  constructor() { }

  callTheParentFunctionWithBlog() {
    this.callMeChild.emit(this.blog)
  }

  ngOnInit(): void {
  }

}
