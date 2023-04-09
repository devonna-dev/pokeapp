import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { PokeInput } from "./components/PokeInput"

export const App = () => (
  <ChakraProvider theme={theme}>
    <div>
      <PokeInput />
    </div>
  </ChakraProvider>
)
