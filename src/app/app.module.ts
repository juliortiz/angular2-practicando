import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PeliculasListComponent } from './peliculas-list/peliculas-list.component';
import { PeliculasFooterComponent } from './peliculas-footer/peliculas-footer.component';
import { PeliculasFavoriteComponent } from './peliculas-favorite/peliculas-favorite.component';


@NgModule({
  declarations: [
    AppComponent,
    PeliculasListComponent,
    PeliculasFooterComponent,
    PeliculasFavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
