import { useEffect, useState } from 'react';
import "../styles/Adopciones.css";

export default function Adopciones() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    const fetchMascotas = async () => {
      try {
        const [perrosRes, gatosRes] = await Promise.all([
          fetch('https://dog.ceo/api/breeds/image/random/6'),
          fetch('https://api.thecatapi.com/v1/images/search?limit=6', {
            headers: { 'x-api-key': process.env.REACT_APP_CAT_API_KEY }
          })
        ]);

        const perrosData = await perrosRes.json();
        const gatosData = await gatosRes.json();

        const perros = perrosData.message.map((img, index) => ({
          id: `perro-${index}`,
          nombre: `Perro ${index + 1}`,
          imagen: img,
          descripcion: 'Este compañero peludo ofrece amor incondicional y está listo para encontrar su hogar para siempre.',
          tipo: 'perro'
        }));

        const gatos = gatosData.map((gato, index) => ({
          id: `gato-${index}`,
          nombre: `Gato ${index + 1}`,
          imagen: gato.url,
          descripcion: 'Busca un hogar donde pueda recibir mimos y jugar sin parar, ¡un alma dulce y juguetona.',
          tipo: 'gato'
        }));

        setMascotas([...perros, ...gatos]);
      } catch (error) {
        console.error('Error al cargar mascotas:', error);
      }
    };

    fetchMascotas();
  }, []);

  return (
    <section className="adopciones-page">
      <h2>🐾 Adopta una mascota</h2>
      <div className="card-container">
        {mascotas.map(mascota => (
          <div key={mascota.id} className={`pet-card ${mascota.tipo}`}>
            <img src={mascota.imagen} alt={mascota.nombre} className="pet-image" />
            <h3>{mascota.nombre}</h3>
            <p>{mascota.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}