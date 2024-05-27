// components/Home.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';
import '../styles/styles.css';

function Home() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              <img src={logo} alt="M" />
            </span>

            <div className="wrap-input">
              <input 
                className={email !== "" ? 'has-val input' : 'input'} 
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input 
                className={senha !== "" ? 'has-val input' : 'input'}
                type="password" 
                value={senha}
                onChange={e => setSenha(e.target.value)} 
                placeholder="Senha"
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>
         
            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>
           
            <div className="registrai">
              <span className="txt1">Não possui cadastro?</span>
              <Link className="txt2" to="/register">Registre-se aqui.</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home;
