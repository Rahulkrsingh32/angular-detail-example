import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { RouterModule,Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogService } from './services/blog.service';
import { EditBlogComponent } from './blogs/edit-blog/edit-blog.component';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  { path:'', component:HomeComponent },
  { path:'blogs', component:BlogsComponent, children:[
      { path:':id',component:BlogComponent },
      { path:':id/edit',component:EditBlogComponent }
  ] },
  { path:'not-found', component:PageNotFoundComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BlogsComponent,
    BlogComponent,
    PageNotFoundComponent,
    EditBlogComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
