import { inject, Injectable } from '@angular/core';
import { Organization } from '../models/organization';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  private _http: HttpClient = inject(HttpClient);
  private readonly _baseUrl = environment.baseUrl + 'organizations';

  getAll(): Observable<Organization[]> {
    return this._http.get<Organization[]>(this._baseUrl);
  }
}
