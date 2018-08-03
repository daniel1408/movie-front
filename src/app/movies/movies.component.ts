import { MovieViewModel } from './../shared/view-models/movie.view-model';
import { MovieService } from './../shared/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {

  movies: Array<MovieViewModel>  = [];

  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();

    this.movies = this.movies.sort((a, b): number => {
      if (a.imdbRating > b.imdbRating) {
        return -1;
      }
      if (a.imdbRating < b.imdbRating) {
        return 1;
      }
      return 0;
    });
  }

  changeGenre(id: number) {
    console.log(id);
  }

}
