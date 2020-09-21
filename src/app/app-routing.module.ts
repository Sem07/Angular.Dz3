import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComentsComponent } from './entity/coments/components/all-coments/all-coments.component';
import { AllPostsComponent } from './entity/post/components/all-posts/all-posts.component';
import { AllUsersComponent } from './entity/user/components/all-user/all-user.component';
import { UserPostComponent } from './entity/user/components/user-post/user-post.component';
import { PostComentsComponent } from './entity/post/components/post-coments/post-coments.component';


const routes: Routes = [
  {path: 'users', component: AllUsersComponent, children: [
    {path: 'post/:id', component: UserPostComponent}
  ]},
  {path: 'posts', component: AllPostsComponent, children:[
    {path: 'comments/:id', component: PostComentsComponent}
  ] },
  {path: 'comments', component: AllComentsComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
