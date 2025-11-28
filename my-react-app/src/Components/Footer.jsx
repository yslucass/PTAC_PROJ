import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3>Restaurante Mais Sabor</h3>
          <p>Qualidade, amor e tradição.</p>
        </div>

        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/reservar-mesa">Reservar Mesa</a></li>
            <li><a href="/ConsultarMesas">Consultar Mesas</a></li>
            <li><a href="/ListarReservas">Minhas Reservas</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <p>Telefone: (11) 99999-9999</p>
          <p>Email: contato@maissabor.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Restaurante Mais Sabor. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
