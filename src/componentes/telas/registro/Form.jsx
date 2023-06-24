import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Alerta from "../../comuns/Alerta";
import jwt_decode from "jwt-decode";
import Autenticacao from "../../seg/Autenticacao";
import Carregando from "../../comuns/Carregando";
import Menu from "../../Menu";

function Login() {
  const { pegaAutenticacao, gravaAutenticacao } = Autenticacao;

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [alerta, setAlerta] = useState({ status: "", message: "" });
  const [autenticado, setAutenticado] = useState(false);
  const [carregando, setCarrengando] = useState(false);

  const acaoCadastrar = async (e) => {
    e.preventDefault();

    try {
      const body = {
        email: email,
        senha: senha,
        usuario: nome,
      };
      setCarrengando(true);
      await fetch(`${process.env.REACT_APP_ENDERECO_API}/usuario`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((json) => {
          setAlerta({ status: "success", message: JSON.stringify(json) });
          // Lógica adicional após o cadastro, se necessário
        });
      setCarrengando(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    const autenticacao = pegaAutenticacao();
    if (autenticacao != null) {
      console.log("autenticação não é null");
      if (autenticacao.auth === true) {
        setAutenticado(true);
      }
    }
  }, []);

  return (
    <div>
      <Menu />
      <body className="login-box">
        <Alerta alerta={alerta} />
        <Carregando carregando={carregando}>
          <main className="form-signin">
            <form onSubmit={acaoCadastrar}>
              <h2>Registrar</h2>
              <div className="user-box">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Nome"
                  value={nome}
                  name="nome"
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>

              <div className="user-box">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="user-box">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Senha"
                  value={senha}
                  name="senha"
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Efetuar Registro
              </button>
            </form>
          </main>
        </Carregando>
      </body>
    </div>
  );
}

export default Login;
