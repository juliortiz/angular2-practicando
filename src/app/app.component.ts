import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})

export class AppComponent {
  public titulo:string;

  
  constructor(){
   this.titulo = "LISTADO DE PELICULAS2";
  }
  
 
}
