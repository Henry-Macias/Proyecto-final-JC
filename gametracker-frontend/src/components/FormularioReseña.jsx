import React, { useState } from "react";
import { createReseña } from "../services/api";

export default function FormularioReseña({ juegoId, actualizar }) {
  const [texto, setTexto] = useState("");
  const [autor, setAutor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createReseña({
      juegoId,
      texto,
      autor,
    })
      .then(() => {
        alert("Reseña agregada ✅");
        setTexto("");
        setAutor("");
        actualizar();
      })
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar reseña</h3>

      <input
        type="text"
        placeholder="Tu nombre"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />

      <textarea
        placeholder="Escribe tu reseña..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      ></textarea>

      <button type="submit">Guardar reseña</button>
    </form>
  );
}