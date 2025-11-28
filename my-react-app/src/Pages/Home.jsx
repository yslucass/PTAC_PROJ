import "../styles/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">

      <section className="home-banner">
        <h1 className="home-title">Bem-vindo ao Sistema de Reservas</h1>
        <p className="home-subtitle">
          Organize mesas, gerencie reservas e consulte informações com rapidez.
        </p>
      </section>

      <section className="home-features">
  <div className="feature-card">
    <Link to="/ListarReservas" className="feature-link">
      <h2>Reservas</h2>
      <p>Acompanhe e administre todas as reservas de clientes.</p>
    </Link>
  </div>

  <div className="feature-card">
    <Link to="/ConsultarMesas" className="feature-link">
      <h2>Mesas</h2>
      <p>Consulte disponibilidade e capacidade das mesas.</p>
    </Link>
  </div>

  <div className="feature-card">
    <Link to="/Cardapio" className="feature-link">
      <h2>Cardápio</h2>
      <p>Gerencie e visualize os itens do cardápio do restaurante.</p>
    </Link>
  </div>
</section>

    </div>
  );
}

export default Home;
