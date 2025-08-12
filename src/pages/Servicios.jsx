import { NavLink } from "react-router-dom";
import "../styles/Servicios.css";

export default function Servicios() {
  return (
    <section className="servicios-page fade-in">
      <h2>Servicios Veterinarios</h2>
      <div className="servicios-grid">
 
  <div className="servicio-card">
    <h3>🩺Consulta general</h3>
    <p>Evaluación médica completa para tu mascota.</p>
  </div>

  <div className="servicio-card">
    <h3>💉Vacunación</h3>
    <p>Aplicación de vacunas esenciales para perros y gatos.</p>
  </div>

  <div className="servicio-card">
    <h3>🪱Desparasitación</h3>
    <p>Tratamientos preventivos y curativos contra parásitos.</p>
  </div>

  <div className="servicio-card">
    <h3>👩🏽‍⚕️Cirugías menores</h3>
    <p>Procedimientos ambulatorios realizados por profesionales certificados.</p>
  </div>

  <div className="servicio-card">
    <h3>🛁Estética y baño</h3>
    <p>Baño, corte de pelo y limpieza para mantener a tu mascota feliz y saludable.</p>
  </div>

  <div className="servicio-card">
    <h3>🏪Urgencias 24 horas</h3>
    <p>Atención inmediata y especializada para situaciones de emergencia.</p>
  </div>

  <div className="servicio-card">
    <h3>🔬Servicios de laboratorio</h3>
    <p> Análisis clínicos como hemogramas, análisis de orina, entre otros.</p>
  </div>

  <div className="servicio-card">
    <h3>🐈Microchip y registro de mascotas</h3>
    <p>Implantación y gestión de microchips para identificación.</p>
  </div>

   <div className="servicio-card">
    <h3>🦴Terapias de rehabilitación y fisioterapia</h3>
    <p>Rehabilitación para mascotas que han sufrido lesiones o cirugías.</p>
  </div>

</div>
    </section>
  );
}