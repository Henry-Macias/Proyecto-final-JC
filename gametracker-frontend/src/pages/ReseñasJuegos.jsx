import React from "react";
import { useParams } from "react-router-dom";
import ListaReseñas from "../components/ListaReseñas";
import FormularioReseña from "../components/FormularioReseña";

export default function ReseñasJuego() {
  const { id } = useParams();

  return (
    <div>
      <h1>Reseñas del juego</h1>

      <FormularioReseña
        juegoId={id}
        actualizar={() => { }}
      />

      <ListaReseñas juegoId={id} />
    </div>
  );
}