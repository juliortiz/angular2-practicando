import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculasServiceService } from '../peliculas-service.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-peliculas-crear',
  templateUrl: './peliculas-crear.component.html',
  styleUrls: ['./peliculas-crear.component.styl']
})
export class PeliculasCrearComponent implements OnInit {
  
  public tituloPelicula = "";

  constructor(private _peliculasService:PeliculasServiceService,
              private _router: Router,
              private _routeParams: ActivatedRoute) { }

  onCrearPelicula(titulo,director,anio){
    let pelicula: Pelicula = new Pelicula(77,titulo,director,anio)
    this._peliculasService.insertPeliculas(pelicula);
    this._router.navigate(['/peliculas'])
    console.log(pelicula);
  }

  ngOnInit():any{
    this.tituloPelicula = this._routeParams.snapshot.params["titulo"];
  }

}
