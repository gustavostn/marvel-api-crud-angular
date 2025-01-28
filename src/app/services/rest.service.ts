import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environment/environment.prod';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private readonly _url = environment.API;
  private _httpClient = inject(HttpClient);

  public get<T = any>(
    path: string,
    queries: Record<string, string> = {}
  ): Observable<{ data: T; requestError: boolean; error?: any }> {
    return this._httpClient
      .get<any>(`${this._url}/${path}?${this._toQueryString(queries)}`)
      .pipe(
        catchError((error) => of({ data: [] as T, requestError: true, error })),
        map((data) => ({ data, requestError: false }))
      );
  }

  private _toQueryString(queries: Record<string, string>) {
    return Object.keys(queries)
      .map((key) => `${key}=${queries[key]}`)
      .join('&');
  }
}
