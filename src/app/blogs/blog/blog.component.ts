import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { BlogModel } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog:BlogModel;

  constructor(
    private activatedRout:ActivatedRoute,
    private router:Router,
    private blogService:BlogService
  ) { }

  ngOnInit(): void {
    this.activatedRout.params.subscribe((params:Params)=>{
      let id=+params['id'];
      this.blog=this.blogService.getBlog(id);
    });
  }

  onEdit(){
    this.router.navigate(['edit'],{relativeTo:this.activatedRout,
    queryParamsHandling:'preserve'});
  }

}
