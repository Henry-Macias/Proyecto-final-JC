import React, { useEffect, useState } from "react";
import { getReseñas } from "../services/api";

export default function ListaReseñas({ juegoId }) {
  const [reseñas, setReseñas] = useState([]);

  const cargarReseñas = () => {
    getReseñas()
      .then((res) => {
        // Filtrar reseñas solo del juego actual
        const filtradas = res.data.filter(
          (r) => r.juegoId === juegoId
        );
        setReseñas(filtradas);
      })
      .catch(console.error);
  };

  useEffect(() => {
    cargarReseñas();
  }, [juegoId]);

  return (
    <div>
      <h3>Reseñas</h3>
      {reseñas.length === 0 && <p>No hay reseñas aún.</p>}

      <ul>
        {reseñas.map((r) => (
          <li key={r._id}>
            <b>{r.autor}:</b> {r.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}