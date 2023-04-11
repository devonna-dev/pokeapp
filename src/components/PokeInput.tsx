import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface PokeInputProps {
    pokemon: string;
    search: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PokeInput = (props: PokeInputProps) => {
    const { pokemon, search, onChange } = props
    return (
        <div className="poke-search-bar">
            <InputGroup>
                <Input placeholder="Search for a pokemon" value={pokemon} onChange={onChange} />;
                <InputRightElement>
                    <Button onClick={search}>
                        Go!
                    </Button>
                </InputRightElement>
            </InputGroup>
        </div>
    );
};
