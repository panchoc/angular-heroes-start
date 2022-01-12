import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoHeroesComponent } from './pages/listado-heroes/listado-heroes.component';
import { PerfilHeroeComponent } from './pages/perfil-heroe/perfil-heroe.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from '../spinner/spinner.component';
import { CapitalizePipe } from '../capitalize.pipe';
import { ModalPollComponent } from '../modal-poll/modal-poll.component';
import { heroesReducer } from '../state/heroes.reducer';
import { collectionReducer } from '../state/collection.reducer';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [ListadoHeroesComponent, 
    PerfilHeroeComponent
  ,SpinnerComponent
,CapitalizePipe,
ModalPollComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule,StoreModule.forRoot({heroes:heroesReducer,collection:collectionReducer})
    
  ]
})
export class HeroesModule { }
