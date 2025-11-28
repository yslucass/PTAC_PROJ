import React, { useState } from 'react';
import '../styles/cadastro.css';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Cadastro realizado:\n` +
      `Nome: ${nome} ${sobrenome}\n` +
      `Email: ${email}\n` +
      `Rua: ${rua}, Nº: ${numero}\n` +
      `Bairro: ${bairro}\n` +
      `Cidade: ${cidade} - ${uf}`
    );
  };

  return (
    <div className="cadastro-container">
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <h2>Cadastro</h2>

        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />

        <label>Sobrenome:</label>
        <input type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Rua:</label>
        <input type="text" value={rua} onChange={(e) => setRua(e.target.value)} required />

        <label>Número:</label>
        <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} required />

        <label>Bairro:</label>
        <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} required />

        <label>Cidade:</label>
        <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} required />

        <label>UF:</label>
        <input
          type="text"
          value={uf}
          onChange={(e) => setUf(e.target.value.toUpperCase())}
          maxLength={2}
          required
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
