import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListadoHeroesComponent } from './pages/listado-heroes/listado-heroes.component';
import { PerfilHeroeComponent } from './pages/perfil-heroe/perfil-heroe.component';


const routes : Routes = [
   
  {
    path : '',
    children : [
      { path : 'listado-heroes', component : ListadoHeroesComponent },
      { path : 'heroe/:id', component : PerfilHeroeComponent},
      {path : '**', redirectTo : 'listadoHeroes'},
      {path : '', component: ListadoHeroesComponent}
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HeroesRoutingModule { }
