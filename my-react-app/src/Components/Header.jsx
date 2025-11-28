import { Link, useLocation } from "react-router-dom";
import '../styles/header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <h1 className="header-title">Reservas de Mesas</h1>

      <nav className="nav-menu">

        <Link className="nav-link" to="/">Home</Link>

        {location.pathname === "/ListarReservas" && (
          <>
            <Link className="nav-link" to="/ConsultarMesas">Consultar Mesas</Link>
            <Link className="nav-link" to="/reservar-mesa">Reservar Mesa</Link>
          </>
        )}

        <Link className="nav-link" to="/Cardapio">Cardápio</Link>
        <Link className="nav-link" to="/Login">Login</Link>
        <Link className="nav-link" to="/Cadastro">Cadastro</Link>

        <Link className="nav-link btn-reservas" to="/ListarReservas">
          Minhas Reservas
        </Link>
      </nav>
    </header>
  );
}

export default Header;
