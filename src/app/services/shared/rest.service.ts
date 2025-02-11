import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { environment } from '../../../environment/environment.prod';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private readonly _url = environment.API;
  private readonly _commentsUrl = environment.API;
  private _httpClient = inject(HttpClient);

  private _configureAPIHash(): string {
    const timestamp = new Date().getTime();
    const privateKey = environment.MARVEL_PRIVATE_API;
    const publicKey = environment.MARVEL_PUBLIC_API;
    const stringToHash = timestamp + privateKey + publicKey;
    const hash = CryptoJS.MD5(stringToHash).toString(CryptoJS.enc.Hex);
    return `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  }

  public get<T = any>(
    path: string,
    queries: Record<string, string> = {}
  ): Observable<{ data: T; error: boolean }> {
    const url = `${
      this._url
    }/${path}${this._configureAPIHash()}&${this._toQueryString(queries)}`;
    return this._httpClient.get<any>(url).pipe(
      catchError((error) => throwError(() => ({ data: error, error: true }))),
      map((data) => ({ data: data.data, error: false }))
    );
  }

  public delete<T = any>(
    path: string,
    queries: Record<string, string> = {}
  ): Observable<{ data: T; error: boolean }> {
    const url = `${this._commentsUrl}/${path}&${this._toQueryString(queries)}`;
    return this._httpClient.get<any>(url).pipe(
      // Using of to bypass the error and return the data
      catchError((error) => of(() => ({ data: error, error: true }))),
      map((data) => ({ data: data.data, error: false }))
    );
  }

  public post<T = any>(
    path: string,
    body: { [key: string]: any }
  ): Observable<{ data: T; error: boolean }> {
    const url = `${this._commentsUrl}/${path}`;
    return this._httpClient.post<any>(window.location.host, body).pipe(
      // Using of to bypass the error and return the data
      catchError((error) => of(() => ({ data: error, error: true }))),
      map((data) => ({ data: data.data, error: false }))
    );
  }

  public put<T = any>(
    path: string,
    body: { [key: string]: any }
  ): Observable<{ data: T; error: boolean }> {
    const url = `${this._commentsUrl}/${path}`;
    return this._httpClient.put<any>(url, body).pipe(
      // Using of to bypass the error and return the data
      catchError((error) => of(() => ({ data: error, error: true }))),
      map((data) => ({ data: data.data, error: false }))
    );
  }

  private _toQueryString(queries: Record<string, string>) {
    if (!Object.keys(queries).length) return '';
    return Object.keys(queries)
      .map((key) => `${key}=${queries[key]}`)
      .join('&');
  }
}
