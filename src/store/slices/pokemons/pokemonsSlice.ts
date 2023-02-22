import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../../../types/pokemon';

interface IPokemonState {
  pokemons: Pokemon[];
  isLoading: boolean;
}

const initialState: IPokemonState = {
  pokemons: [],
  isLoading: false,
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: initialState,
  reducers: {
    startFetching: (state) => {
      state.isLoading = true;
    },
    savePokemons: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = action.payload;
      state.isLoading = false;
    },
  },
});

export const { startFetching, savePokemons } = pokemonsSlice.actions;
export default pokemonsSlice;

export type PokemonsActions = ReturnType<
  typeof startFetching | typeof savePokemons
>;
