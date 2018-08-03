import { MovieViewModel } from './../view-models/movie.view-model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class MovieService {

  commentsUrl = 'http://www.omdbapi.com/?t=heat&y=1995&apikey=8af6a417';
  url = 'http://www.omdbapi.com/?t=heat&y=1995&apikey=8af6a417';
  movies: MovieViewModel;

  constructor(
    private http: Http
  ) { }

  private naoVistos;
  private vistos;

  // getMovies() {
  //   this.http.get(this.commentsUrl).subscribe( data => {
  //     this.movies = new MovieViewModel(data);
  //     console.log(this.movies);
  //     }
  //   );
  // }

  getMovies() {
    return [
      {
        id: '1',
        Title: 'Kubo and the Two Strings',
        Year: '2016',
        Genre: 'Animation, Adventure, Family',
        Director: 'Travis Knight',
        Writer: 'Marc Haimes (screenplay by), Chris Butler (screenplay by), Shannon Tindle (story by), Marc Haimes (story by)',
        Actors: 'Art Parkinson, Charlize Theron, Ralph Fiennes, Brenda Vaccaro',
        Plot: 'A young boy named Kubo must locate a magical suit of armour worn by' +
        'his late father in order to defeat a vengeful spirit from the past.',
        Language: 'English',
        Awards: 'Nominated for 2 Oscars. Another 32 wins & 58 nominations.',
        Country: 'UK, USA',
        Poster: 'assets/img/kubo.jpg',
        imdbRating: '7.8',
        userOption: 'Não visto',
        topTen: false
      },
      {
        id: '2',
        Title: 'Justice League da silva sauro coelho arantes do nascimento costa diamantina',
        Year: '2017',
        Genre: 'Action, Adventure, Fantasy',
        Director: 'Zack Snyder',
        Writer: 'Chris Terrio (screenplay by), Joss Whedon (screenplay by), Chris Terrio (story by), ' +
        'Zack Snyder (story by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by), ' +
        'Gardner Fox (Justice League of America created by), Bob Kane (Batman created by), Bill Finger' +
        '(Batman created by), William Moulton Marston (Wonder Woman created by), Jack Kirby (Fourth World created by)',
        Actors: 'Ben Affleck, Henry Cavill, Amy Adams, Gal Gadot',
        Plot: 'Fueled by his restored faith in humanity and inspired by Supermans selfless act, ' +
        'Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy.',
        Language: 'English, Irish, Russian, Icelandic',
        Awards: '1 nomination.',
        Country: 'UK, USA',
        Poster: 'assets/img/league.jpg',
        imdbRating: '7.2',
        userOption: 'Bom',
        topTen: false
      },
      {
        id: '3',
        Title: 'The Shawshank Redemption',
        Year: '1994',
        Genre: 'Crime, Drama',
        Director: 'Frank Darabont',
        Writer: 'Stephen King (short story \'Rita Hayworth and Shawshank Redemption\'), Frank Darabont (screenplay)',
        Actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
        Plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        Language: 'English',
        Awards: 'Nominated for 7 Oscars. Another 19 wins & 29 nominations.',
        Country: 'UK, USA',
        Poster: 'assets/img/um sonho.jpg',
        imdbRating: '9.3',
        userOption: 'Regular',
        topTen: true
      },
      {
        id: '5',
        Title: 'Mad Max: Fury Road',
        Year: '2015',
        Genre: 'Action, Adventure, Sci-Fi',
        Director: 'George Miller',
        Writer: 'George Miller, Brendan McCarthy, Nick Lathouris',
        Actors: 'Tom Hardy, Charlize Theron, Nicholas Hoult, Hugh Keays-Byrne',
        Plot: 'A woman rebels against a tyrannical ruler in postapocalyptic Australia in search for' +
        'her home-land with the help of a group of female prisoners, a psychotic worshipper, and a drifter named Max.',
        Language: 'English, Russian',
        Awards: 'Won 6 Oscars. Another 232 wins & 219 nominations.',
        Country: 'UK, USA',
        Poster: 'assets/img/madmax.jpg',
        imdbRating: '8.1',
        userOption: 'Regular',
        topTen: true
      },
      {
        id: '6',
        Title: 'Baby Driver',
        Year: '2017',
        Genre: 'Action, Crime, Music',
        Director: 'Edgar Wright',
        Writer: 'Edgar Wright',
        Actors: 'Ansel Elgort, Jon Bernthal, Jon Hamm, Eiza González',
        Plot: 'After being coerced into working for a crime boss, a young getaway driver finds himself' +
        'taking part in a heist doomed to fail.',
        Language: 'English, American Sign Language',
        Country: 'UK, USA',
        Awards: 'Nominated for 1 Golden Globe. Another 15 wins & 15 nominations.',
        Poster: 'assets/img/baby.jpg',
        imdbRating: '7.7',
        userOption: 'Bom',
        topTen: false
      },
      {
        id: '7',
        Title: 'The Magnificent Seven',
        Year: '2016',
        Genre: 'Action, Adventure, Western',
        Director: 'Antoine Fuqua',
        Writer: 'Akira Kurosawa (based on the screenplay by), Shinobu Hashimoto ' +
        '(based on the screenplay by), Hideo Oguni (based on the screenplay by), Nic Pizzolatto (screenplay), Richard Wenk (screenplay)',
        Actors: 'Denzel Washington, Chris Pratt, Ethan Hawke, Vincent DOnofrio',
        Plot: 'Seven gunmen in the old west gradually come together to help a poor village against savage thieves.',
        Language: 'English, North American Indian, Spanish',
        Country: 'USA',
        Awards: '5 wins & 12 nominations.',
        Poster: 'assets/img/magnificent.jpg',
        imdbRating: '6.9',
        userOption: 'Top',
        topTen: false
      },
      {
        id: '8',
        Title: 'Dunkirk',
        Year: '2017',
        Genre: 'Action, Drama, History',
        Director: 'Christopher Nolan',
        Writer: 'Christopher Nolan',
        Actors: 'Fionn Whitehead, Damien Bonnard, Aneurin Barnard, Lee Armstrong',
        Plot: 'Allied soldiers from Belgium, the British Empire and France are surrounded by' +
        'the German Army, and evacuated during a fierce battle in World War II.',
        Language: 'English, French, German',
        Country: 'UK, Netherlands, France, USA',
        Awards: 'Nominated for 3 Golden Globes. Another 18 wins & 97 nominations.',
        Poster: 'assets/img/dunkirk.jpg',
        imdbRating: '8.2',
        userOption: 'Não Visto',
        topTen: true
      },
      {
        id: '9',
        Title: 'Kubo and the Two Strings',
        Year: '2016',
        Genre: 'Animation, Adventure, Family',
        Director: 'Travis Knight',
        Writer: 'Marc Haimes (screenplay by), Chris Butler (screenplay by), Shannon Tindle (story by), Marc Haimes (story by)',
        Actors: 'Art Parkinson, Charlize Theron, Ralph Fiennes, Brenda Vaccaro',
        Plot: 'A young boy named Kubo must locate a magical suit of armour worn by' +
        'his late father in order to defeat a vengeful spirit from the past.',
        Language: 'English',
        Country: 'UK, USA',
        Awards: 'Nominated for 2 Oscars. Another 32 wins & 58 nominations.',
        Poster: 'assets/img/kubo.jpg',
        imdbRating: '7.8',
        userOption: 'Não Visto',
        topTen: false
      },
      {
        id: '10',
        Title: 'Justice League',
        Year: '2017',
        Genre: 'Action, Adventure, Fantasy',
        Director: 'Zack Snyder',
        Writer: 'Chris Terrio (screenplay by), Joss Whedon (screenplay by), Chris Terrio (story by), ' +
        'Zack Snyder (story by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by), ' +
        'Gardner Fox (Justice League of America created by), Bob Kane (Batman created by), Bill Finger' +
        '(Batman created by), William Moulton Marston (Wonder Woman created by), Jack Kirby (Fourth World created by)',
        Actors: 'Ben Affleck, Henry Cavill, Amy Adams, Gal Gadot',
        Plot: 'Fueled by his restored faith in humanity and inspired by Supermans selfless act, ' +
        'Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy.',
        Language: 'English, Irish, Russian, Icelandic',
        Country: 'UK, USA',
        Awards: '1 nomination.',
        Poster: 'assets/img/league.jpg',
        imdbRating: '7.2',
        userOption: 'Regular',
        topTen: false
      },
      {
        id: '11',
        Title: 'The Shawshank Redemption',
        Year: '1994',
        Genre: 'Crime, Drama',
        Director: 'Frank Darabont',
        Writer: 'Stephen King (short story \'Rita Hayworth and Shawshank Redemption\'), Frank Darabont (screenplay)',
        Actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
        Plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        Language: 'English',
        Country: 'UK, USA',
        Awards: 'Nominated for 7 Oscars. Another 19 wins & 29 nominations.',
        Poster: 'assets/img/um sonho.jpg',
        imdbRating: '9.3',
        userOption: 'Regular',
        topTen: true
      },
      {
        id: '13',
        Title: 'Mad Max: Fury Road',
        Year: '2015',
        Genre: 'Action, Adventure, Sci-Fi',
        Director: 'George Miller',
        Writer: 'George Miller, Brendan McCarthy, Nick Lathouris',
        Actors: 'Tom Hardy, Charlize Theron, Nicholas Hoult, Hugh Keays-Byrne',
        Plot: 'A woman rebels against a tyrannical ruler in postapocalyptic Australia in search for' +
        'her home-land with the help of a group of female prisoners, a psychotic worshipper, and a drifter named Max.',
        Language: 'English, Russian',
        Country: 'UK, USA',
        Awards: 'Won 6 Oscars. Another 232 wins & 219 nominations.',
        Poster: 'assets/img/madmax.jpg',
        imdbRating: '8.1',
        userOption: 'Top',
        topTen: true
      },
      {
        id: '14',
        Title: 'Baby Driver',
        Year: '2017',
        Genre: 'Action, Crime, Music',
        Director: 'Edgar Wright',
        Writer: 'Edgar Wright',
        Actors: 'Ansel Elgort, Jon Bernthal, Jon Hamm, Eiza González',
        Plot: 'After being coerced into working for a crime boss, a young getaway driver finds himself' +
        'taking part in a heist doomed to fail.',
        Language: 'English, American Sign Language',
        Country: 'UK, USA',
        Awards: 'Nominated for 1 Golden Globe. Another 15 wins & 15 nominations.',
        Poster: 'assets/img/baby.jpg',
        imdbRating: '7.7',
        userOption: 'Top',
        topTen: false
      },
      {
        id: '1',
        Title: 'Kubo and the Two Strings',
        Year: '2016',
        Genre: 'Animation, Adventure, Family',
        Director: 'Travis Knight',
        Writer: 'Marc Haimes (screenplay by), Chris Butler (screenplay by), Shannon Tindle (story by), Marc Haimes (story by)',
        Actors: 'Art Parkinson, Charlize Theron, Ralph Fiennes, Brenda Vaccaro',
        Plot: 'A young boy named Kubo must locate a magical suit of armour worn by' +
        'his late father in order to defeat a vengeful spirit from the past.',
        Language: 'English',
        Country: 'UK, USA',
        Awards: 'Nominated for 2 Oscars. Another 32 wins & 58 nominations.',
        Poster: 'assets/img/kubo.jpg',
        imdbRating: '7.8',
        userOption: 'Não Visto',
        topTen: false
      },
      {
        id: '2',
        Title: 'Justice League',
        Year: '2017',
        Genre: 'Action, Adventure, Fantasy',
        Director: 'Zack Snyder',
        Writer: 'Chris Terrio (screenplay by), Joss Whedon (screenplay by), Chris Terrio (story by), ' +
        'Zack Snyder (story by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by), ' +
        'Gardner Fox (Justice League of America created by), Bob Kane (Batman created by), Bill Finger' +
        '(Batman created by), William Moulton Marston (Wonder Woman created by), Jack Kirby (Fourth World created by)',
        Actors: 'Ben Affleck, Henry Cavill, Amy Adams, Gal Gadot',
        Plot: 'Fueled by his restored faith in humanity and inspired by Supermans selfless act, ' +
        'Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy.',
        Language: 'English, Irish, Russian, Icelandic',
        Awards: '1 nomination.',
        Country: 'UK, USA',
        Poster: 'assets/img/league.jpg',
        imdbRating: '7.2',
        userOption: 'Regular',
        topTen: false
      },
      {
        id: '3',
        Title: 'The Shawshank Redemption',
        Year: '1994',
        Genre: 'Crime, Drama',
        Director: 'Frank Darabont',
        Writer: 'Stephen King (short story \'Rita Hayworth and Shawshank Redemption\'), Frank Darabont (screenplay)',
        Actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
        Plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        Language: 'English',
        Country: 'UK, USA',
        Awards: 'Nominated for 7 Oscars. Another 19 wins & 29 nominations.',
        Poster: 'assets/img/um sonho.jpg',
        imdbRating: '9.3',
        userOption: 'Top',
        topTen: true
      },
      {
        id: '5',
        Title: 'Mad Max: Fury Road',
        Year: '2015',
        Genre: 'Action, Adventure, Sci-Fi',
        Director: 'George Miller',
        Writer: 'George Miller, Brendan McCarthy, Nick Lathouris',
        Actors: 'Tom Hardy, Charlize Theron, Nicholas Hoult, Hugh Keays-Byrne',
        Plot: 'A woman rebels against a tyrannical ruler in postapocalyptic Australia in search for' +
        'her home-land with the help of a group of female prisoners, a psychotic worshipper, and a drifter named Max.',
        Language: 'English, Russian',
        Country: 'UK, USA',
        Awards: 'Won 6 Oscars. Another 232 wins & 219 nominations.',
        Poster: 'assets/img/baby.jpg',
        imdbRating: '8.1',
        userOption: 'Regular',
        topTen: true
      },
      {
        id: '6',
        Title: 'Baby Driver',
        Year: '2017',
        Genre: 'Action, Crime, Music',
        Director: 'Edgar Wright',
        Writer: 'Edgar Wright',
        Actors: 'Ansel Elgort, Jon Bernthal, Jon Hamm, Eiza González',
        Plot: 'After being coerced into working for a crime boss, a young getaway driver finds himself' +
        'taking part in a heist doomed to fail.',
        Language: 'English, American Sign Language',
        Country: 'UK, USA',
        Awards: 'Nominated for 1 Golden Globe. Another 15 wins & 15 nominations.',
        Poster: 'assets/img/baby.jpg',
        imdbRating: '7.7',
        userOption: 'Regular',
        topTen: false
      },
      {
        id: '7',
        Title: 'The Magnificent Seven',
        Year: '2016',
        Genre: 'Action, Adventure, Western',
        Director: 'Antoine Fuqua',
        Writer: 'Akira Kurosawa (based on the screenplay by), Shinobu Hashimoto ' +
        '(based on the screenplay by), Hideo Oguni (based on the screenplay by), Nic Pizzolatto (screenplay), Richard Wenk (screenplay)',
        Actors: 'Denzel Washington, Chris Pratt, Ethan Hawke, Vincent DOnofrio',
        Plot: 'Seven gunmen in the old west gradually come together to help a poor village against savage thieves.',
        Language: 'English, North American Indian, Spanish',
        Country: 'USA',
        Awards: '5 wins & 12 nominations.',
        Poster: 'assets/img/magnificent.jpg',
        imdbRating: '6.9',
        userOption: 'Top',
        topTen: false
      },
      {
        id: '8',
        Title: 'Dunkirk',
        Year: '2017',
        Genre: 'Action, Drama, History',
        Director: 'Christopher Nolan',
        Writer: 'Christopher Nolan',
        Actors: 'Fionn Whitehead, Damien Bonnard, Aneurin Barnard, Lee Armstrong',
        Plot: 'Allied soldiers from Belgium, the British Empire and France are surrounded by' +
        'the German Army, and evacuated during a fierce battle in World War II.',
        Language: 'English, French, German',
        Country: 'UK, Netherlands, France, USA',
        Awards: 'Nominated for 3 Golden Globes. Another 18 wins & 97 nominations.',
        Poster: 'assets/img/dunkirk.jpg',
        imdbRating: '8.2',
        userOption: 'Não Visto',
        topTen: true
      },
      {
        id: '9',
        Title: 'Kubo and the Two Strings',
        Year: '2016',
        Genre: 'Animation, Adventure, Family',
        Director: 'Travis Knight',
        Writer: 'Marc Haimes (screenplay by), Chris Butler (screenplay by), Shannon Tindle (story by), Marc Haimes (story by)',
        Actors: 'Art Parkinson, Charlize Theron, Ralph Fiennes, Brenda Vaccaro',
        Plot: 'A young boy named Kubo must locate a magical suit of armour worn by' +
        'his late father in order to defeat a vengeful spirit from the past.',
        Language: 'English',
        Country: 'UK, USA',
        Awards: 'Nominated for 2 Oscars. Another 32 wins & 58 nominations.',
        Poster: 'assets/img/kubo.jpg',
        imdbRating: '7.8',
        userOption: 'Não Visto',
        topTen: false
      },
      {
        id: '10',
        Title: 'Justice League',
        Year: '2017',
        Genre: 'Action, Adventure, Fantasy',
        Director: 'Zack Snyder',
        Writer: 'Chris Terrio (screenplay by), Joss Whedon (screenplay by), Chris Terrio (story by), ' +
        'Zack Snyder (story by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by), ' +
        'Gardner Fox (Justice League of America created by), Bob Kane (Batman created by), Bill Finger' +
        '(Batman created by), William Moulton Marston (Wonder Woman created by), Jack Kirby (Fourth World created by)',
        Actors: 'Ben Affleck, Henry Cavill, Amy Adams, Gal Gadot',
        Plot: 'Fueled by his restored faith in humanity and inspired by Supermans selfless act, ' +
        'Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy.',
        Language: 'English, Irish, Russian, Icelandic',
        Awards: '1 nomination.',
        Country: 'UK, USA',
        Poster: 'assets/img/league.jpg',
        imdbRating: '7.2',
        userOption: 'Regular',
        topTen: false
      },
      {
        id: '11',
        Title: 'The Shawshank Redemption',
        Year: '1994',
        Genre: 'Crime, Drama',
        Director: 'Frank Darabont',
        Writer: 'Stephen King (short story \'Rita Hayworth and Shawshank Redemption\'), Frank Darabont (screenplay)',
        Actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
        Plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        Language: 'English',
        Country: 'UK, USA',
        Awards: 'Nominated for 7 Oscars. Another 19 wins & 29 nominations.',
        Poster: 'assets/img/um sonho.jpg',
        imdbRating: '9.3',
        userOption: 'Top',
        topTen: true
      },
      {
        id: '13',
        Title: 'Mad Max: Fury Road',
        Year: '2015',
        Genre: 'Action, Adventure, Sci-Fi',
        Director: 'George Miller',
        Writer: 'George Miller, Brendan McCarthy, Nick Lathouris',
        Actors: 'Tom Hardy, Charlize Theron, Nicholas Hoult, Hugh Keays-Byrne',
        Plot: 'A woman rebels against a tyrannical ruler in postapocalyptic Australia in search for' +
        'her home-land with the help of a group of female prisoners, a psychotic worshipper, and a drifter named Max.',
        Language: 'English, Russian',
        Country: 'UK, USA',
        Awards: 'Won 6 Oscars. Another 232 wins & 219 nominations.',
        Poster: 'assets/img/madmax.jpg',
        imdbRating: '8.1',
        userOption: 'Top',
        topTen: true
      },
      {
        id: '14',
        Title: 'Baby Driver',
        Year: '2017',
        Genre: 'Action, Crime, Music',
        Director: 'Edgar Wright',
        Writer: 'Edgar Wright',
        Actors: 'Ansel Elgort, Jon Bernthal, Jon Hamm, Eiza González',
        Plot: 'After being coerced into working for a crime boss, a young getaway driver finds himself' +
        'taking part in a heist doomed to fail.',
        Language: 'English, American Sign Language',
        Country: 'UK, USA',
        Awards: 'Nominated for 1 Golden Globe. Another 15 wins & 15 nominations.',
        Poster: 'assets/img/baby.jpg',
        imdbRating: '7.7',
        userOption: 'Ruim',
        topTen: false
      },
      {
        id: '14',
        Title: 'Baby Driver',
        Year: '2017',
        Genre: 'Action, Crime, Music',
        Director: 'Edgar Wright',
        Writer: 'Edgar Wright',
        Actors: 'Ansel Elgort, Jon Bernthal, Jon Hamm, Eiza González',
        Plot: 'After being coerced into working for a crime boss, a young getaway driver finds himself' +
        'taking part in a heist doomed to fail.',
        Language: 'English, American Sign Language',
        Country: 'UK, USA',
        Awards: 'Nominated for 1 Golden Globe. Another 15 wins & 15 nominations.',
        Poster: 'assets/img/baby.jpg',
        imdbRating: '7.7',
        userOption: 'Ótimo',
        topTen: false,
      }
    ];
  }

  getFilmes() {
    this.getMovies().forEach(element => {
      element.Genre = element.Genre.split(', ')[0];
    });
  }

  getFilm(id: string) {
    const filmes = this.getMovies();
    for (let i = 0; i < filmes.length; i++) {
      const filme = filmes[i];
      if (filme.id === id) {
        return filme;
      }
    }
    return null;
  }
}
