import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coments } from 'src/app/models/Comments';

@Injectable({
  providedIn: 'root'
})
export class ComentsService {

  constructor(private http: HttpClient) { }
    getComents(): Observable<Coments[]>{
      return this.http.get<Coments[]>('https://jsonplaceholder.typicode.com/comments')
    
  }
  getPostComents(id): Observable<Coments[]>{
    return this.http.get<Coments[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  }

}
