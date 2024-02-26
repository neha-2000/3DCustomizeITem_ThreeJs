import { useState } from "react";
import Home from "./pages/Home";
import Customizer from "./pages/Customizer";
import Canvas from "./canvas/Canvas";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
