import { useState } from "react";
import "../styles/Form.css";

export default function AgendarCita() {
  const [form, setForm] = useState({
    name: "",
    pet: "",
    date: "",
    service: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cita agendada:", form);
  };

  return (
    <section className="form-section fade-in">
        <form onSubmit={handleSubmit}>
          <h1>Agendar Cita</h1>
          <label>Nombre Dueño :
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>Nombre Mascota:
            <input name="pet" value={form.pet} onChange={handleChange} required />
          </label>
          <label>Tipo de Animal:
            <input name="animalType" value={form.animalType} onChange={handleChange} required />
          </label>
          <label>Raza:
            <input name="breed" value={form.breed} onChange={handleChange} required />
          </label>
          <label>Fecha:
            <input type="date" name="date" value={form.date} onChange={handleChange} required />
          </label>
          <label>Servicio:
            <input name="service" value={form.service} onChange={handleChange} required />
          </label>
          
          <button type="submit">Enviar</button>
        </form>
    </section>
  );
}