import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

import {IPost} from './post/post';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http:HttpClient) { }

  getPost():Observable<IPost[]>{
    return this._http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
                      .pipe(catchError(this.handleError))

  }

  handleError(error:HttpErrorResponse){
    return throwError(error.message || 'Server eror')
  }
}
