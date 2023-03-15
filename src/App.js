import React from "react";

import Home from "./pages/Home";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <ThirdwebProvider activeChain={Sepolia}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThirdwebProvider>
  );
}

export default App;
