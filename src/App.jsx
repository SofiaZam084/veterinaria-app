import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Adopciones from './pages/Adopciones';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import Appointment from './pages/AgendarCita';
import './styles/App.css'; // solo estilos globales y animaciones
import AgendarCita from './pages/AgendarCita';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adopciones" element={<Adopciones />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/agendarcita" element={<AgendarCita />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;