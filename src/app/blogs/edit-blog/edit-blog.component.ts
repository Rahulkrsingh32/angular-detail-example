import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  allowEdit:boolean;
  blogTitle:string;
  blogDescription:string;

  constructor(
    private activatedRout:ActivatedRoute,
    private blogService:BlogService
  ) { }

  ngOnInit(): void {
    this.activatedRout.params.subscribe((params:Params)=>{
      let id=+params['id'];
      let blog = this.blogService.getBlog(id);
      this.blogTitle=blog.title;
      this.blogDescription=blog.description;
    });
    this.activatedRout.queryParams.subscribe((params:Params)=>{
      this.allowEdit=params['allowEdit']==='1'?true:false;
      
    });
  }

  onUpdate(){
    let blogInfo:{title:string, description:string}={
      title:this.blogTitle,
      description:this.blogDescription
    };
    this.activatedRout.params.subscribe((params:Params)=>{
      let id=+params['id'];
      this.blogService.updateBlog(id,blogInfo);
    });
  }

}
