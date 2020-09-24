import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ComentsService} from 'src/app/entity/coments/services/coments.service';
import {Coments} from 'src/app/models/Comments';

@Component({
  selector: 'app-post-coments',
  templateUrl: './post-coments.component.html',
  styleUrls: ['./post-coments.component.css']
})
export class PostComentsComponent implements OnInit {
  comments: Coments[];
  id: number;

  constructor(private activatedRoute: ActivatedRoute, private comentsService: ComentsService, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      const postId = this.router.getCurrentNavigation().extras.state;
      if (postId ) {
        this.id =  postId.postId;
        this.ngOnInit();
      }
    });
  }

  ngOnInit(): void {
    this.comentsService.getPostComents(this.id).subscribe(coments => this.comments = coments)
  }

}
