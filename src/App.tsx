import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

export const App = () => (
  <ChakraProvider theme={theme}>
    <div>
      <h1>Hello, world!</h1>
    </div>
  </ChakraProvider>
)
