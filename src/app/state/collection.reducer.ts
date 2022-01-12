import { createReducer, on } from '@ngrx/store';
import { addBook, removeBook } from './heroes.actions';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(removeBook, (state, { heroeId }) => state.filter((id) => id !== heroeId)),
  on(addBook, (state, { heroeId }) => {
    if (state.indexOf(heroeId) > -1) return state;

    return [...state, heroeId];
  })
);