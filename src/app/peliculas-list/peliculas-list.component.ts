import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculasServiceService } from '../peliculas-service.service';

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./app-peliculas-list.styl'],
})

export class PeliculasListComponent implements OnInit {
  
  public pelicula:Pelicula;
  public peliculaElegida:Pelicula;
  public mostrarDatos:boolean;
  public peliculas;
  public datoServicio;

  constructor(private _peliculasService: PeliculasServiceService) {
 
    this.mostrarDatos = false;
    this.peliculas = this._peliculasService.getPeliculas();
    this.pelicula = this.peliculas[0];
    this.peliculaElegida = this.peliculas[0];    
  }

  onShowHide(value){
    this.mostrarDatos = value;
  }

  debug(titulo = null){
    if(titulo === null){
      console.log(this.pelicula);
    }else{
      console.log("nuevo titulo es:"+ this.pelicula.titulo);
    }
  }

  onCambiarPelicula(pelicula){
    this.pelicula = pelicula;
    this.peliculaElegida = pelicula;
  }
  ngOnInit() {
  }

}
