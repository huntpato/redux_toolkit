import { ThunkAction } from '@reduxjs/toolkit';
import { getPokemons } from '../../services/getPokemons';
import { PokemonsActions, savePokemons, startFetching } from '../slices/pokemons/pokemonsSlice';
import { RootState } from '../store';


interface FetchPokemons extends ThunkAction<void, RootState, unknown, PokemonsActions> { }

// Thunk 
export const fetchPokemons = (): FetchPokemons => {
  return async (dispatch) => {
    dispatch(startFetching());
    try {
      const pokemons = await getPokemons();
      dispatch(savePokemons(pokemons));
    } catch (error) {
      console.log(error);
    }
  }
}