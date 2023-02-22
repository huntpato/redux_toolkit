import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter/counterSlice";
import pokemonsSlice from "./slices/pokemons/pokemonsSlice";

export const store = configureStore({
    reducer:{
        counter: counterSlice.reducer,
        pokemons: pokemonsSlice.reducer
    }
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;