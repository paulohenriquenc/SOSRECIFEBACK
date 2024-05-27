// components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/styles.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users/register', { username, password });
      if (response && response.data) {
        setMessage(response.data);
      } else {
        setMessage('Erro ao registrar: resposta inválida do servidor');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage('PORRAQINFERNO: ' + error.response.data);
      } else {
        setMessage('PORRAQINFERNO: ' + error.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleRegister}>
            <h1 className="title">Registre-se</h1>

            <div className="wrap-input">
              <input
                className={username !== "" ? 'has-val input' : 'input'}
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Nome de usuário"
              />
              <span className="focus-input" data-placeholder="Nome de usuário"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Senha"
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Registrar</button>
            </div>

            {message && <p>{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
