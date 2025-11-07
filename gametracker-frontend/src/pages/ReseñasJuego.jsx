import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ListaReseñas from "../components/ListaReseñas";
import FormularioReseña from "../components/FormularioReseña";

export default function ReseñasJuego() {
  const { id } = useParams();
  const [reseñaSeleccionada, setReseñaSeleccionada] = useState(null);

  const limpiarSeleccion = () => setReseñaSeleccionada(null);

  // ✅ Para refrescar la lista después de crear/editar:
  const actualizar = () => {
    // Esto no hace nada ahora, pero ListaReseñas recarga sola al cambiar reseñas
  };

  return (
    <div>
      <Link to="/">⬅ Volver</Link>
      <h1>Reseñas del juego</h1>

      <FormularioReseña
        juegoId={id}
        reseñaSeleccionada={reseñaSeleccionada}
        limpiarSeleccion={limpiarSeleccion}
        actualizar={actualizar}
      />

      <ListaReseñas
        juegoId={id}
        onEdit={(r) => setReseñaSeleccionada(r)}
      />
    </div>
  );
}