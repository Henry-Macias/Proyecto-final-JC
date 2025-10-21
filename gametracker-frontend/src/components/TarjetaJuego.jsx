import React from 'react';

export default function TarjetaJuego({ juego }) {
  return (
    <div className="card">
      <img src={juego.portada} alt={juego.titulo} />
      <h3>{juego.titulo}</h3>
      <p>Horas jugadas: {juego.horasJugadas}</p>
      <p>⭐ {juego.puntuacion}/5</p>
    </div>
  );
}
