import { BooksComponent } from './books/books.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const App_routes: Routes = [

    {path: 'tv', component: TvComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'books', component: BooksComponent},

    {path: 'home', component: HomeComponent},
    {path: 'sign-up', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    // {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({

    imports: [RouterModule.forRoot(App_routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
