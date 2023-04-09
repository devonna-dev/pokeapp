import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";


export const PokeInput = () => {
    const [pokemon, setPokemon] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPokemon(event.target.value)
    }

    const fetchPokemon = async () => {
        const searchedPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const pokeJson = await searchedPoke.json()
        console.log(pokeJson)
    }

    return (
        <div className="todo-input">
            <InputGroup>
                <Input placeholder="Search for a pokemon" value={pokemon} onChange={onChange} />;
                <InputRightElement>
                    <Button onClick={fetchPokemon}>
                        Go!
                    </Button>
                </InputRightElement>
            </InputGroup>
        </div>
    );
};
