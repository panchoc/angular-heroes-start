import { createAction, props } from "@ngrx/store";
import { Heroe } from "../classes/heroe.model";


export const addBook = createAction(
    '[Book List] Add Book',
    props<{ heroeId: string }>()
  );
   
  export const removeBook = createAction(
    '[Book Collection] Remove Book',
    props<{ heroeId: string }>()
  )

export const retrievedHerosList = createAction(
    '[Hero List/API] Retrieve Books Success',
    props<{heroes : ReadonlyArray<Heroe>}>()

);