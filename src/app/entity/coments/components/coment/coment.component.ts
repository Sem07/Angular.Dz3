import {Component, Input, OnInit} from '@angular/core';
import { Coments } from 'src/app/models/Comments';

@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.css']
})
export class ComentComponent {
  @Input() 
  coments: Coments;

  constructor() { }

  ngOnInit(): void {
  }

}
