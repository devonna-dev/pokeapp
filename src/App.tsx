import * as React from "react"
import "./App.css";
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { PokeInput } from "./components/PokeInput"
import { PokeCard } from "./components/PokeCard"
import { useState } from "react";

export const App = () => {
  const [pokemon, setPokemon] = useState('');
  const [pokeObject, setPokeObject] = useState({
    name: '',
    height: '',
    weight: '',
    image: ''
  });

  const [pokeTypeArray, setPokeTypeArray] = useState(['']);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemon(event.target.value)
  }

  const fetchPokemon = async () => {
    const normalizedPokemon = pokemon.toLowerCase();
    const searchedPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${normalizedPokemon}`)
    const pokeJson = await searchedPoke.json()
    console.log(pokeJson)
    let pokeTypeArray: string[] = [];

    if (pokeJson.types.length > 1) {
      const typeArray = pokeJson.types
      typeArray.forEach((arrayItem: any) => { //find right type here for arrayItem
        pokeTypeArray = [...pokeTypeArray, arrayItem.type.name]
      })
    } else {
      pokeTypeArray = [pokeJson.types[0].type.name]
    }

    const pokeObject = {
      name: pokeJson.name,
      height: pokeJson.height,
      weight: pokeJson.weight,
      image: pokeJson.sprites.front_default
    };
    setPokeObject(pokeObject);
    setPokeTypeArray(pokeTypeArray);
  }

  const searchForPokemon = () => {
    if (pokemon === '') {
      alert('Please enter a valid pokemon name and try again')
    } else {
      fetchPokemon();
      setPokemon("");
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <div className='app-container'>
        <PokeInput pokemon={pokemon} search={searchForPokemon} onChange={onChange} />
        <PokeCard name={pokeObject.name} weight={pokeObject.weight} height={pokeObject.height} type={pokeTypeArray} image={pokeObject.image} />
      </div>
    </ChakraProvider>
  )
}
