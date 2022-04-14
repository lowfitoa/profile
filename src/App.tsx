import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { Toa } from "./toa";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Toa />
  </ChakraProvider>
);
