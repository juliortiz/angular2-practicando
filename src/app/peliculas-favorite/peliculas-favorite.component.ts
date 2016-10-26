import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-peliculas-favorite',
  templateUrl: './peliculas-favorite.component.html',
  styleUrls: ['./peliculas-favorite.component.styl']
})
export class PeliculasFavoriteComponent implements OnInit {

  public mostrarDatos:boolean;
  public pelicula:Pelicula;
  
  constructor(){
    this.pelicula = new Pelicula(1,"Pelicula OP","Pepito grillo", 1956);
    this.mostrarDatos = false;   
    this.debug();
  }
  
  debug(titulo = null){
    if(titulo === null){
      console.log(this.pelicula);
    }else{
      console.log("nuevo titulo es:"+ this.pelicula.titulo);
    }
  }

  onShowHide(value){
    this.mostrarDatos = value;
  }

  ngOnInit() {
  }

}
