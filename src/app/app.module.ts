import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PeliculasListComponent } from './peliculas-list/peliculas-list.component';
import { PeliculasFooterComponent } from './peliculas-footer/peliculas-footer.component';
import { PeliculasServiceService } from './peliculas-service.service';
import { Test01Angular2RoutingModule } from './app-routing.module';
import { PeliculasContactoComponent } from './peliculas-contacto/peliculas-contacto.component';
import { PeliculasHomeComponent } from './peliculas-home/peliculas-home.component';
import { PeliculasCrearComponent } from './peliculas-crear/peliculas-crear.component';


@NgModule({
  declarations: [
    AppComponent,
    PeliculasListComponent,
    PeliculasFooterComponent,
    PeliculasContactoComponent,
    PeliculasHomeComponent,
    PeliculasCrearComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Test01Angular2RoutingModule
  ],
  providers: [PeliculasServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
