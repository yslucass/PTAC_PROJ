import React, { useState } from 'react';
import "../styles/reservarMesa.css";

function ReservarMesa() {
  const [dataReserva, setDataReserva] = useState('');
  const [horario, setHorario] = useState('');
  const [nomeCliente, setNomeCliente] = useState('');
  const [contato, setContato] = useState('');
  const [mesaSelecionada, setMesaSelecionada] = useState('');
  const [qtdPessoas, setQtdPessoas] = useState('');

  const mesasDisponiveis = ['1', '2', '3', '4', '5'];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Reserva confirmada:
      Cliente: ${nomeCliente}
      Contato: ${contato}
      Data: ${dataReserva}
      Horário: ${horario}
      Mesa: ${mesaSelecionada}
      Quantidade de Pessoas: ${qtdPessoas}`
    );

    setDataReserva('');
    setHorario('');
    setNomeCliente('');
    setContato('');
    setMesaSelecionada('');
    setQtdPessoas('');
  };

  return (
    <div className="reservar-container">
      <h2 className="reservar-title">Reservar Mesa</h2>

      <form className="reservar-form" onSubmit={handleSubmit}>

        <label>
          Data da reserva:
          <input
            type="date"
            value={dataReserva}
            onChange={(e) => setDataReserva(e.target.value)}
            required
          />
        </label>

        <label>
          Horário:
          <input
            type="time"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
            required
          />
        </label>

        <label>
          Nome do Cliente:
          <input
            type="text"
            value={nomeCliente}
            onChange={(e) => setNomeCliente(e.target.value)}
            required
            placeholder="Digite o nome"
          />
        </label>

        <label>
          Contato:
          <input
            type="text"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
            required
            placeholder="Telefone ou email"
          />
        </label>

        <label>
          Quantidade de Pessoas:
          <input
            type="number"
            value={qtdPessoas}
            onChange={(e) => setQtdPessoas(e.target.value)}
            required
            min="1"
            placeholder="Ex: 4"
          />
        </label>

        <label>
          Mesa:
          <select
            value={mesaSelecionada}
            onChange={(e) => setMesaSelecionada(e.target.value)}
            required
          >
            <option value="">Selecione uma mesa</option>
            {mesasDisponiveis.map((mesa) => (
              <option key={mesa} value={mesa}>
                Mesa {mesa}
              </option>
            ))}
          </select>
        </label>

        <button className="reservar-btn" type="submit">Reservar</button>
      </form>
    </div>
  );
}

export default ReservarMesa;
