import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BibliotecaJuegos from "./pages/BibliotecaJuegos";
import ReseñasJuego from "./pages/ReseñasJuego";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BibliotecaJuegos />} />
        <Route path="/reseñas/:id" element={<ReseñasJuego />} />
      </Routes>
    </BrowserRouter>
  );
}