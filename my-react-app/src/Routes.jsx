import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Reservas from './Pages/Reservas';
import CadastrarMesa from './Pages/CadastrarMesa';
import ReservarMesa from './Pages/ReservarMesa';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import ConsultarMesas from './Pages/ConsultarMesas';
import ListarReservas from './Pages/ListarReservas';
import Cardapio from './Pages/Cardapio'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Reservas" element={<Reservas />} />
      <Route path="/cadastrar-mesa" element={<CadastrarMesa />} />
      <Route path="/reservar-mesa" element={<ReservarMesa />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Cadastro" element={<Cadastro/>} />
      <Route path="/Cardapio" element={<Cardapio/>} />
      <Route path="/ConsultarMesas" element={<ConsultarMesas/>} />
      <Route path="/ListarReservas" element={<ListarReservas/>} />
    </Routes>
  );
}

export default AppRoutes;
