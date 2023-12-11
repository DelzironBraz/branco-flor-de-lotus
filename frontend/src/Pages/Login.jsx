import { Link } from 'react-router-dom';
import './LoginRegister.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/signIn', {
        email,
        password,
      });

    console.log(response.data);
    navigate('/');

    } catch (error) {
      console.error(error.response.data); 
    }
  };

    return(
        <>
            <div className='caixa_grande'>    
                <div className="container" id="container">
                <div className="formulario-container login-container">
                    <form onSubmit={handleLogin} action="#">
                        <h1>Bem-vindo</h1>
                        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <div className="containerdologin-container">
                            <div className="recuperarsenha">
                                <a href="#">Esqueceu a senha? </a>
                            </div>
                            <button className="botao">logar</button>
                        </div>
                    </form>
                </div>

                <div className="movimento-container">
                    <div className="movimento">
                        <div className="movimento-painel movimento-direito">
                            <h1 className="titulo">Crie sua conta aqui</h1>
                            <p>Caso não tenha uma conta, crie ela clicando a baixo</p>
                            <Link to="/register"><button className="ghost" id="registro" >Registro &rarr;</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};
export default Login;