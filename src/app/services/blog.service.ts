import { BlogModel } from "../models/blog.model";

export class BlogService {
    private blogs:BlogModel[]=[
        {
            sid:1,
            title:'Technology',
            description: 'Technology is the result of accumulated knowledge and application of skills, methods, and processes used in industrial production and scientific research.'
        },
        {
            sid:2,
            title:'Science',
            description:'Science is a systematic enterprise that builds and organizes knowledge in the form of testable explanations and predictions about the universe.'
        },
        {
            sid:3,
            title:'Agriculture',
            description:'Agriculture or farming is the practice of cultivating plants and livestock. ... Agriculture was the key development in the rise of sedentary human civilization'
        }
    ];

    getBlogs():BlogModel[]{
        return this.blogs;
    }

    getBlog(id:number){
        return this.blogs.find(blog=>blog.sid===id);
    }

    updateBlog(id:number, blogInfo:{ title:string, description:string }){
        let index=this.blogs.findIndex(blog=>blog.sid===id);
        let blog=this.blogs[index];
        blog.title=blogInfo.title;
        blog.description=blogInfo.description;
    }
}