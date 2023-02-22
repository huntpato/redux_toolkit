import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchPokemons } from '../../store/thunk/pokemonThunk';
import styles from "./Pokemons.module.css";;

const Pokemons = () => {

    const { container } = styles;

    const pokemons = useAppSelector((state) => state.pokemons.pokemons);
    // console.log(pokemons)
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchPokemons())
    },[])

  return (
    <div className={container}>
        <p>Top Ten Pokemon</p>
        <ul>
            {pokemons.map((pokemon)=>(
                <li key={pokemon.name}>{pokemon.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Pokemons