import * as React from "react"
import "./App.css";
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { PokeInput } from "./components/PokeInput"
import { PokeCard } from "./components/PokeCard"

// lets mockup a pokemon object
const pokeObject = {
  name: "Ditto",
  type: "normal",
  height: "3 feet",
  weight: "40lbs",
}

export const App = () => (
  <ChakraProvider theme={theme}>
    <div className='app-container'>
      <PokeInput />
      <PokeCard name={pokeObject.name} weight={pokeObject.weight} height={pokeObject.height} type={pokeObject.type} />
    </div>
  </ChakraProvider>
)
