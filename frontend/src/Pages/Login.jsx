import { Link } from 'react-router-dom';
import './LoginRegister.css'

const Login = ()=>{
    return(
        <>
            <div className='caixa_grande'>    
                <div className="container" id="container">
                <div className="formulario-container login-container">
                    <form action="#">
                        <h1>Bem-vindo</h1>
                        <input type="email" placeholder="email"/>
                        <input type="password" placeholder="senha"/>
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