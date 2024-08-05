import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  private _http: HttpClient = inject(HttpClient);
  private readonly _baseUrl = environment.baseUrl + 'tags';

  getAll(): Observable<Tag[]> {
    return this._http.get<Tag[]>(this._baseUrl);
  }
}
