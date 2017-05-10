import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Movie } from './movie';

@Injectable()
export class MoviesService {

  constructor(private http: Http) { }

  getMovies(): Observable<Movie[]>  {
    return this.http.get('/api/movies')
      .map(resp => resp.json());
  }

  getMovie(id: number): Observable<Movie> {
    console.log("ID====", id);
    return this.http.get(`/api/movies/${id}`)
      .map(resp => resp.json());
  }

  updateMovie(movie: Movie): Observable<Response> {
    return this.http.put(`/api/movies/${movie.id}`, movie);
  }
}
