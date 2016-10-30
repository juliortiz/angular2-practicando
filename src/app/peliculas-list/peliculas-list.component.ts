import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./app-peliculas-list.styl']
})

export class PeliculasListComponent implements OnInit {
  
  public pelicula:Pelicula;
  public peliculaElegida:Pelicula;
  public mostrarDatos:boolean;
  public peliculas:Array<Pelicula>;

  constructor() { 
    this.mostrarDatos = false;
    this.peliculas = [
      new Pelicula(1,"Pelicula OP1","Pepito grillo 1", 2001),
      new Pelicula(2,"Pelicula OP2","Pepito grillo 2", 1656),
      new Pelicula(3,"Pelicula OP3","Pepito grillo 3"),
      new Pelicula(4,"Pelicula OP4","Pepito grillo 4", 1984),
      new Pelicula(5,"Pelicula OP5","Pepito grillo 5", 1945),
      new Pelicula(6,"Pelicula OP6","Pepito grillo 6", 1978)
    ]
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
