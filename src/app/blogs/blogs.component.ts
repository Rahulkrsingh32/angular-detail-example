import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogModel } from '../models/blog.model';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs:BlogModel[];

  constructor(
    private blogService:BlogService,
    private routerService:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.blogs=this.blogService.getBlogs();
  }

}
