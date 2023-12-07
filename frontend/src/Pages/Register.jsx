const Register = ()=>{
    return(
    <>
        <div className="container" id="container">

          <div className="formulario-container login-container">
            <form action="#">
              <h1>Cadastre-se</h1>
              <input type="text" placeholder="nickname"/>
              <input type="email" placeholder="email"/>
              <input type="password" placeholder="senha" id="senha"/>
              <input type="password" placeholder="confirme a senha" id="senhaconfirme"/>
              <button className="botao">Registrar</button>
            </form>
          </div>

          <div className="movimento-container">
              <div className="movimento">

                  <div className="movimento-painel movimento-direito">
                      <h1 className="titulo">Bem-Vindo</h1>
                      <p>Caso já tenha uma conta, Porfavor logue aqui</p>
                      <button className="ghost" id="registro">Login&rarr;</button>

                  </div>
              </div>
          </div>
      </div>

    </>
    );
};
export default Register;