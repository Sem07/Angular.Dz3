import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './entity/user/components/user/user.component';
import { AllUsersComponent } from './entity/user/components/all-user/all-user.component';
import { AllPostsComponent } from './entity/post/components/all-posts/all-posts.component';
import { PostComponent } from './entity/post/components/post/post.component';
import { ComentComponent } from './entity/coments/components/coment/coment.component';
import { AllComentsComponent } from './entity/coments/components/all-coments/all-coments.component';
import { PostComentsComponent } from './entity/post/components/post-coments/post-coments.component';
import { UserPostComponent } from './entity/user/components/user-post/user-post.component';






@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent,
    AllPostsComponent,
    PostComponent,
    AllComentsComponent,
    ComentComponent,
    UserPostComponent,
    PostComentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
