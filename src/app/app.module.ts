import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ListadoDeHeroesComponent } from './listado-de-heroes/listado-de-heroes.component';
import { HeroesService } from './heroes.service';
// import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ModalPollComponent } from './modal-poll/modal-poll.component';
import { CapitalizePipe } from './capitalize.pipe';
import { StoreModule } from '@ngrx/store';
import { heroesReducer } from './state/heroes.reducer';

@NgModule({
  declarations: [
    AppComponent,
    // ListadoDeHeroesComponent,
    // HeroProfileComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //StoreModule.forRoot({heroes : heroesReducer}, {})
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
