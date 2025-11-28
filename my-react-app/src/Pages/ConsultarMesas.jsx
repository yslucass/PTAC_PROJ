import "../styles/consultarMesa.css";
import React, { useState } from "react";

function ConsultarMesas() {
  const [numeroMesa, setNumeroMesa] = useState("");
  const [statusMesa, setStatusMesa] = useState("");
  const [capacidadeMesa, setCapacidadeMesa] = useState("");

  const handleConsultar = () => {
    alert("Consulta realizada (simulação)!");
  };

  const handleLimpar = () => {
    setNumeroMesa("");
    setStatusMesa("");
    setCapacidadeMesa("");
  };

  return (
    <div className="cm-container">
      <h2 className="cm-title">Consultar Mesas</h2>

      <div className="cm-field">
        <label>N° da Mesa:</label>
        <input
          type="number"
          value={numeroMesa}
          onChange={(e) => setNumeroMesa(e.target.value)}
          placeholder="Digite o número da mesa"
        />
      </div>

      <div className="cm-field">
        <label>Status da Mesa:</label>
        <select
          value={statusMesa}
          onChange={(e) => setStatusMesa(e.target.value)}
        >
          <option value="">Selecione...</option>
          <option value="disponivel">Disponível</option>
          <option value="ocupada">Ocupada</option>
          <option value="reservada">Reservada</option>
        </select>
      </div>

      <div className="cm-field">
        <label>Capacidade da Mesa:</label>
        <input
          type="number"
          value={capacidadeMesa}
          onChange={(e) => setCapacidadeMesa(e.target.value)}
          placeholder="Digite a capacidade"
        />
      </div>

      <div className="cm-buttons">
        <button className="cm-btn" onClick={handleConsultar}>Consultar</button>
        <button className="cm-btn cm-btn-clear" onClick={handleLimpar}>
          Limpar
        </button>
      </div>
    </div>
  );
}

export default ConsultarMesas;
