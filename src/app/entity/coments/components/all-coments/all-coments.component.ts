import { Component} from '@angular/core';
import { Coments } from 'src/app/models/Comments';
import { ComentsService } from '../../services/coments.service';

@Component({
  selector: 'app-all-coments',
  templateUrl: './all-coments.component.html',
  styleUrls: ['./all-coments.component.css']
})
export class AllComentsComponent {
  postComents: Coments[] = []
  constructor(private comentsService: ComentsService) {
    this.comentsService.getComents().subscribe(value => this.postComents = value)
   }

  ngOnInit(): void {
  }

}
