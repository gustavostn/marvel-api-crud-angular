import { Injectable, inject } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { RestService } from '../../shared/rest.service';
import { Comment } from './interface/comments-api.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private _restService = inject(RestService);

  public createComment(params: Comment): Observable<boolean> {
    return this._restService.post('comments', params).pipe(
      delay(350), // Emulating a delay
      map(() => true)
    );
  }

  public editComment(params: Comment): Observable<boolean> {
    return this._restService.put('comments', params).pipe(
      delay(350), // Emulating a delay
      map(() => true)
    );
  }

  public deleteComment(id: number): Observable<boolean> {
    return this._restService.delete('comments', { id: id.toString() }).pipe(
      delay(350), // Emulating a delay
      map(() => true)
    );
  }
}
