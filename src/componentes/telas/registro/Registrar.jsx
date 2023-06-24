import { useState, useEffect, useContext } from "react";
import UsuarioContext from "./UsuarioContext.jsx";
import FormReg from "./Form.jsx";
import Menu from "../../Menu.jsx";

function Registrar() {
  const [alerta, setAlerta] = useState({ status: "", message: "" });
  const [listaObjetos, setListaObjetos] = useState([]);
  const [editar, setEditar] = useState(false);

  const [objeto, setObjeto] = useState({
    codigo: "",
    usuario: "",
    email: "",
    senha: "",
  });

  const acaoCadastrar = async (e) => {
    e.preventDefault();
    const metodo = "POST";
    try {
      const response = await fetch(
        `${process.env.REACT_APP_ENDERECO_API}/usuario`,
        {
          method: metodo,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(objeto),
        }
      );
      const json = await response.json();
      setAlerta({ status: json.status, message: json.message });
      setObjeto(json.objeto);
    } catch (err) {
      console.error("Erro cadastrar" + err.message);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setObjeto({ ...objeto, [name]: value });
  };

  return (
    <UsuarioContext.Provider
      value={{
        alerta,
        setAlerta,
        listaObjetos,
        setListaObjetos,
        objeto,
        setObjeto,
        editar,
        setEditar,
        acaoCadastrar,
        handleChange,
      }}
    >
      <Registrar />
      <FormReg />
    </UsuarioContext.Provider>
  );
}

export default Registrar;
