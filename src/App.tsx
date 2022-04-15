import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toa } from "./toa";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Toa />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
