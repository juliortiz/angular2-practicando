import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasListComponent } from './peliculas-list/peliculas-list.component';
import { PeliculasContactoComponent } from './peliculas-contacto/peliculas-contacto.component'
import { PeliculasHomeComponent } from './peliculas-home/peliculas-home.component'
import { PeliculasCrearComponent } from './peliculas-crear/peliculas-crear.component'

const routes: Routes = [
  
  { path:'home', component: PeliculasHomeComponent},
  { path:'peliculas', component: PeliculasListComponent},
  { path:'añadir', component: PeliculasCrearComponent},
  { path:'otro/:titulo', component: PeliculasCrearComponent},
  { path:'contacto', component: PeliculasContactoComponent},
  { path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Test01Angular2RoutingModule { }
