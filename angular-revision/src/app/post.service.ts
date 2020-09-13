import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {IPost} from './post/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http:HttpClient) { }

  getPost():Observable<IPost[]>{
    return this._http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')

  }
}
