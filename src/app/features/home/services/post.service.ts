import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { PostReq } from '../models/post-req';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private _http: HttpClient = inject(HttpClient);
  private readonly _baseUrl = environment.baseUrl + 'posts';

  getAll(): Observable<Post[]> {
    return this._http.get<Post[]>(this._baseUrl);
  }

  create(post: PostReq): Observable<any> {
    return this._http.post<any>(this._baseUrl, post);
  }
}
