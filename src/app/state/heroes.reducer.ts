import { createReducer, on } from "@ngrx/store";

import { retrievedHerosList } from "./heroes.actions";
import { Heroe } from "../classes/heroe.model";

export const initialState: ReadonlyArray<Heroe> = [];

export const heroesReducer = createReducer(
    initialState,
    on(retrievedHerosList, (state, {heroes})=> heroes)
)

