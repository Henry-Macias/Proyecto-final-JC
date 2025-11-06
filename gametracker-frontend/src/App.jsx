import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BibliotecaJuegos from "./pages/BibliotecaJuegos";
import ReseñasJuego from "./pages/ReseñasJuego";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BibliotecaJuegos />} />
        <Route path="/reseñas/:id" element={<ReseñasJuego />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;