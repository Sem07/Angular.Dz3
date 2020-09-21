import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentsService } from 'src/app/entity/coments/services/coments.service';
import { Coments } from 'src/app/models/Comments';

@Component({
  selector: 'app-post-coments',
  templateUrl: './post-coments.component.html',
  styleUrls: ['./post-coments.component.css']
})
export class PostComentsComponent{
  comments: Coments[]
  id: number
  constructor(private activatedRoute: ActivatedRoute, private comentsService: ComentsService) {
    this.activatedRoute.params.subscribe(value => this.id = value.id)
   }

  ngOnInit(): void {
    this.comentsService.getPostComents(this.id).subscribe(coments => this.comments = coments)
  }

}
