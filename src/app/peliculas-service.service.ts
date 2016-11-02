import { Injectable } from '@angular/core';
import { PELICULAS } from './mock.peliculas';
import { Pelicula } from './pelicula';

@Injectable()
export class PeliculasServiceService {

  getPeliculas(){
    return PELICULAS;
  }

  insertPeliculas(pelicula: Pelicula){
    Promise.resolve(PELICULAS).then((peliculas:Pelicula[])=> peliculas.push(pelicula))
  }

  constructor() { }

}
