import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Heroe } from "../classes/heroe.model";

export const selectHeroe = createFeatureSelector<ReadonlyArray<Heroe>>('heroes')

export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection')

export const selectHeroeCollection = createSelector(
    selectHeroe,
    selectCollectionState,
    (heroes, collection)=>{
        return collection.map((id)=>heroes.find((heroe)=>heroe.id === id))
    }
)