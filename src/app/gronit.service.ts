import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Status } from './status';
import { Summary } from './summary';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GronitService {
  constructor(
    private http: HttpClient) {
  }

  getHistory(id: string): Observable<Status[]> {
    return this.http.get<Status[]>(`https://staging-gronit.quezx.com/history/${id}`)
      .pipe(
        map(status => status), // returns a {0|1} element array
        catchError(this.handleError<Status[]>(`History id=${id}`))
      );
  }

  getStatus(id: string): Observable<Status> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append( 'Access-Control-Allow-Origin', '*');
    return this.http.get<Status>(`https://staging-gronit.quezx.com/status/${id}`, {headers: headers})
      .pipe(
        tap(_ => console.log('fetched status')),
        catchError(this.handleError<Status>('Status'))
      );
  }

  getSummary(id: string): Observable<Summary> {
    return this.http.get<Summary>( `https://staging-gronit.quezx.com/summary/${id}`)
      .pipe(
        tap(_ => console.log('fetched summary')),
        catchError(this.handleError<Summary> ('Summary'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  }
}
