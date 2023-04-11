import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";


export const PokeInput = () => {
    const [pokemon, setPokemon] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPokemon(event.target.value)
    }

    const fetchPokemon = async () => {
        const normalizedPokemon = pokemon.toLowerCase();
        const searchedPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${normalizedPokemon}`)
        const pokeJson = await searchedPoke.json()
        console.log(pokeJson)
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
        <div className="poke-search-bar">
            <InputGroup>
                <Input placeholder="Search for a pokemon" value={pokemon} onChange={onChange} />;
                <InputRightElement>
                    <Button onClick={searchForPokemon}>
                        Go!
                    </Button>
                </InputRightElement>
            </InputGroup>
        </div>
    );
};
