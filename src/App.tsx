import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toa } from "./toa";
import { CustomDot } from "./components/custom-dot";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Toa />} />
      </Routes>
    </BrowserRouter>
    <CustomDot />
  </ChakraProvider>
);
