import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistroUsuario from './components/RegistroUsuario';
import EmisionFacturas from './components/EmisionFacturas';
import GestionClientes from './components/GestionClientes';
import GestionProductos from './components/GestionProductos';
import Reportes from './components/Reportes';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/registro">Registro Usuarios</Link> | 
        <Link to="/facturas">Facturas</Link> | 
        <Link to="/clientes">Clientes</Link> | 
        <Link to="/productos">Productos</Link> | 
        <Link to="/reportes">Reportes</Link>
      </nav>

      <Routes>
        <Route path="/registro" element={<RegistroUsuario />} />
        <Route path="/facturas" element={<EmisionFacturas />} />
        <Route path="/clientes" element={<GestionClientes />} />
        <Route path="/productos" element={<GestionProductos />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    </Router>
  );
}

export default App;
