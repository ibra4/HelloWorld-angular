import { Component, Input, OnInit } from '@angular/core';
import { BlogsInterface } from '../Interfaces/blogs-interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() blog: BlogsInterface

  constructor() { }

  ngOnInit(): void {
  }

}
