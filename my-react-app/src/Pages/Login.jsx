import React, { useState } from 'react';
import '../styles/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tentando login com\nEmail: ${email}\nSenha: ${senha}`);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Entrar</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="form-label">
            Email
            <input
              className="form-input"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="seu@email.com"
            />
          </label>

          <label className="form-label">
            Senha
            <input
              className="form-input"
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
              placeholder="********"
            />
          </label>

          <button className="btn-submit" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
