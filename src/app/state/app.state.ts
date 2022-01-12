import { Heroe } from "../classes/heroe.model";


export interface AppState {
    heroes: ReadonlyArray<Heroe>;
    collection: ReadonlyArray<string>;
  }