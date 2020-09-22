import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PostService } from 'src/app/entity/post/services/post.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent {
  posts: Post[];

  id: number
  constructor(private activatedRouter: ActivatedRoute, private postService: PostService, private router: Router) {
    this.activatedRouter.params.subscribe(value => {this.id = value.id;
    console.log(this.router.getCurrentNavigation().extras.state)})
   }

  ngOnInit(): void {
    this.postService.getUserPosts(this.id).subscribe(posts => this.posts = posts)
  }

}
