import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { Movie } from '../core/models/movie.model';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(`/movie/popular`).pipe(
      map((data: any) => {
        return data.results;
      }), catchError( error => {
        return throwError( 'Errore', error );
      })
    );
  }
}
