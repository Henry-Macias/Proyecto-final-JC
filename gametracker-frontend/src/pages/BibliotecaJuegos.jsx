import React, { useEffect, useState } from 'react';
import { getJuegos } from '../services/api';
import TarjetaJuego from '../components/TarjetaJuego';

export default function BibliotecaJuegos() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    getJuegos().then(res => setJuegos(res.data)).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Mi Biblioteca de Juegos</h2>
      <div className="grid">
        {juegos.map(juego => (
          <TarjetaJuego key={juego._id} juego={juego} />
        ))}
      </div>
    </div>
  );
}
