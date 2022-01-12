import { TestBed, inject } from '@angular/core/testing';

import { HeroesService } from './heroes.service';

fdescribe('HeroesService', () => {
let httpClientSpy : {get : jasmine.Spy}
let heroeService : HeroesService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesService]
    });
  });

  it('should be created', inject([HeroesService], (service: HeroesService) => {
    expect(service).toBeTruthy();
  }));
});
