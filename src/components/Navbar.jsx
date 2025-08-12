import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="brand-container">
        <img src="/logo.png" alt="Logo de la veterinaria" className="logo" />
      </div>
      <ul className="nav-links">
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/adopciones">Adopciones</NavLink></li>
        <li><NavLink to="/servicios" className="cta-link">Servicios</NavLink></li>
        <li><NavLink to="/agendarcita" className="cta-link">Agendar cita</NavLink></li>
        <li><NavLink to="/contacto" className="cta-link">Contacto</NavLink></li>
      </ul>
    </nav>
  );
}