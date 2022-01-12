import { Component, OnInit, ViewChild } from '@angular/core';
import { Heroe } from '../../../classes/heroe';
import { HeroesService } from '../../../heroes.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectHeroe, selectHeroeCollection } from '../../../state/heroes.selector';
import { retrievedHerosList } from '../../../state/heroes.actions';
import { HeroeStoreService } from '../../../heroesStore.service';




@Component({
  selector: 'app-listado-de-heroes',
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.css']
})
export class ListadoHeroesComponent implements OnInit {

  public heroes$ = this.store.select(selectHeroe)
  public heroesCollection$ = this.store.select(selectHeroeCollection)
  public title = 'Tutorial de Angular - Héroes de Marvel';
  public searchString;
  // The child component : spinner
  @ViewChild('spi') spinner;
  /* public heroes: Array<Heroe> = []; */

  constructor(private heroesService: HeroesService, private router:Router, private store:Store, private heroStoreService:HeroeStoreService) { }

  submitSearch() {
    this.heroesService.resetPager();
    this.heroesService.getHeroes(this.searchString);
  }

  prevPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page - 1);
  }

  nextPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page + 1);
  }

  go_to(id){
    this.router.navigateByUrl('/heroe/'+id);
  }

  ngOnInit() {
    
  //this.heroStoreService.getHeroes().subscribe((heroes)=> this.store.dispatch(retrievedHerosList({heroes})))
    
    this.heroesService.getHeroes();

    this.heroStoreService.getHeroes();

    

  }

}
