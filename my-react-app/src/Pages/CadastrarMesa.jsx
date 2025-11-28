import React, { useState } from 'react';

function CadastrarMesa() {
  const [numeroMesa, setNumeroMesa] = useState('');
  const [capacidade, setCapacidade] = useState('');
  const [status, setStatus] = useState('disponível');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mesa ${numeroMesa}, capacidade: ${capacidade}, status: ${status}`);
    setNumeroMesa('');
    setCapacidade('');
    setStatus('disponível');
  };

  const handleLimpar = () => {
    setNumeroMesa('');
    setCapacidade('');
    setStatus('disponível');
  };

  return (
    <div className="container">
      <h2>Cadastrar Mesa</h2>

      <form onSubmit={handleSubmit} className="form-cadastro">
        <div className="form-group">
          <label>Número da Mesa (ID):</label>
          <input
            type="text"
            value={numeroMesa}
            onChange={(e) => setNumeroMesa(e.target.value)}
            required
            placeholder="Digite o número da mesa"
          />
        </div>

        <div className="form-group">
          <label>Capacidade da Mesa:</label>
          <input
            type="number"
            min="1"
            value={capacidade}
            onChange={(e) => setCapacidade(e.target.value)}
            required
            placeholder="Número de pessoas"
          />
        </div>

        <div className="form-group">
          <label>Status da Mesa:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="disponível">Disponível</option>
            <option value="ocupada">Ocupada</option>
          </select>
        </div>

        <div className="button-group">
          <button type="submit">Salvar</button>
          <button type="button" className="btn-clear" onClick={handleLimpar}>
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CadastrarMesa;