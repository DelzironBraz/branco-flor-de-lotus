import Login from './Login.jsx'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setError('Senhas não coincidem');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/auth/signUp',{
      username,
      email,
      password,
    });
    console.log(response);
    console.log(response.data);

    navigate('/login');
    } 

    catch (error) {
    console.error(error.response.data);
    setError('Registro falhou. Tente novamente.');
    }
  };

    return(
      <>
        <div className='caixa_grande'>
          <div className="container" id="container">

            <div className="formulario-container login-container">
              <form onSubmit={handleRegister} action="#">
                <h1>Cadastre-se</h1>
                <input type="text" placeholder="nickname" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="senha" id="senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" placeholder="confirme a senha" id="senhaconfirme" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
                <button className="botao">Registrar</button>
              </form>
            </div>

            <div className="movimento-container">
                <div className="movimento">

                    <div className="movimento-painel movimento-direito">
                        <h1 className="titulo">Bem-Vindo</h1>
                        <p>Caso já tenha uma conta, Porfavor logue aqui</p>
                        <Link to="/login"><button className="ghost" id="registro">Login&rarr;</button></Link>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
    );
};
export default Register;