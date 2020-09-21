import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllPostsComponent } from 'src/app/entity/post/components/all-posts/all-posts.component';
import { PostService } from 'src/app/entity/post/services/post.service';
import {User} from '../../../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUsersComponent {

  usersList: User[] = [];
  id: number


  constructor(private userService: UserService        
  ) {
     this.userService.getUsers()
      .subscribe(value => this.usersList = value)
     }
}