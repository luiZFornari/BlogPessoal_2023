import { useState, useEffect } from "react";
import Carregando from "../../comuns/Carregando";
import {
  getPublicacoes,
  getPublicacoesPorCodigoAPI,
} from "../../serviços/PublicacaoServico";
import {
  getComentarioPorPublicacaoAPI,
  getComentarioPorCodigoAPI,
  deleteComentarioPorCodigoAPI,
  cadastraComentariosAPI,
} from "../../serviços/ComentarioServico";
import { useNavigate } from "react-router-dom";
import ComentarioContext from "./ComentarioContext";
import ItensComentario from "./ItensComentario";

function Comentario({ codigoPublicacao }) {
  let navigate = useNavigate();

  const [alerta, setAlerta] = useState({ status: "", message: "" });
  const [listaComentarios, setListaComentario] = useState([]);
  const [editar, setEditar] = useState(false);
  const [comentario, setComentario] = useState({
    codigo: "",
    texto: "",
    data: "",
    usuario: "",
    publicacao: "",
  });
  const [carregando, setCarrengando] = useState(true);
  const [publicacao, setPublicacao] = useState([]);

  const recuperar = async (codigo) => {
    try {
      setComentario(await getComentarioPorCodigoAPI(codigo));
      recuperaPublicacao(comentario.codigo);
    } catch (err) {
      window.location.reload();
      navigate("/login", { replace: true });
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setComentario({ ...comentario, [name]: value });
  };

  const recuperaComentarios = async (codigo) => {
    try {
      setCarrengando(true);
      setListaComentario(await getComentarioPorPublicacaoAPI(codigo));
      setCarrengando(false);
    } catch (err) {
      window.location.reload();
      navigate("/login", { replace: true });
    }
  };

  const recuperaPublicacao = async (objeto) => {
    setPublicacao(await getPublicacoesPorCodigoAPI(objeto.codigo));
  };

  useEffect(() => {
    recuperaComentarios(codigoPublicacao);
    recuperaPublicacao(codigoPublicacao);
  }, [codigoPublicacao]);

  return (
    <ComentarioContext.Provider
      value={{
        handleChange,
        recuperar,
        carregando,
        setCarrengando,
        publicacao,
        setPublicacao,
        listaComentarios,
        setListaComentario,
        alerta,
        setComentario,
        setAlerta,
        setEditar,
        comentario,
      }}
    >
      <Carregando carregando={carregando}>
        <ItensComentario />
      </Carregando>
    </ComentarioContext.Provider>
  );
}

export default Comentario;
