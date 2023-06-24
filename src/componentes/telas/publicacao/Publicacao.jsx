import { useState, useEffect } from "react";
import PublicacoesContext from "./PublicacaoContext";
import Carregando from "../../comuns/Carregando";
import {
  getPublicacoesAPI,
  getPublicacoesPorCodigoAPI,
  deletePublicacoesPorCodigoAPI,
  cadastraPublicacoesAPI,
} from "../../serviços/PublicacaoServico.jsx";

import { useNavigate } from "react-router-dom";
import ItensPublico from "./ItensPublicacao";

function Publicacao() {
  let navigate = useNavigate();

  const [alerta, setAlerta] = useState({ status: "", message: "" });
  const [listaObjetos, setListaObjetos] = useState([]);
  const [editar, setEditar] = useState(false);
  const [objeto, setObjeto] = useState({
    codigo: "",
    titulo: "",
    descricao: "",
    data: "",
    imagem: "",
  });
  const [carregando, setCarrengando] = useState(true);

  const recuperar = async (codigo) => {
    try {
      setObjeto(await getPublicacoesPorCodigoAPI(codigo));
    } catch (err) {
      window.location.reload();
      navigate("/login", { replace: true });
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setObjeto({ ...objeto, [name]: value });
  };

  const recuperaPublicacoes = async () => {
    try {
      setCarrengando(true);
      setListaObjetos(await getPublicacoesAPI());
      setCarrengando(false);
    } catch (err) {
      window.location.reload();
      navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    recuperaPublicacoes();
  }, []);

  return (
    <PublicacoesContext.Provider
      value={{
        alerta,
        setAlerta,
        listaObjetos,
        setListaObjetos,
        recuperaPublicacoes,
        objeto,
        setObjeto,
        editar,
        setEditar,
        recuperar,
        handleChange,
      }}
    >
      <Carregando carregando={carregando}>
        <ItensPublico />
      </Carregando>
    </PublicacoesContext.Provider>
  );
}

export default Publicacao;
