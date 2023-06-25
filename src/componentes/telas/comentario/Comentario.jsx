import { useState, useEffect } from "react";
import FormularioComentario from "./FormularioComentario";
import Carregando from "../../comuns/Carregando";
import { getPublicacoesAPI } from "../../serviços/PublicacaoServico";
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
  const [listaPublicacao, setListaPublicacao] = useState([]);

  const recuperar = async (codigo) => {
    try {
      setComentario(await getComentarioPorCodigoAPI(codigo));
    } catch (err) {
      window.location.reload();
      navigate("/login", { replace: true });
    }
  };

  const acaoCadastrar = async (e) => {
    e.preventDefault();
    const metodo = editar ? "PUT" : "POST";
    try {
      let retornoAPI = await cadastraComentariosAPI(comentario, metodo);
      setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
      setComentario(retornoAPI.objeto);
      if (!editar) {
        setEditar(true);
      }
    } catch (err) {
      window.location.reload();
      navigate("/login", { replace: true });
    }
    recuperaComentarios(codigoPublicacao);
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

  const recuperaPublicacao = async () => {
    setListaPublicacao(await getPublicacoesAPI());
  };

  const remover = async (objeto) => {
    if (window.confirm("Deseja remover este objeto?")) {
      try {
        let retornoAPI = await deleteComentarioPorCodigoAPI(objeto.codigo);
        setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
      } catch (err) {
        console.log(err);
        window.location.reload();
        navigate("/login", { replace: true });
      }
    }
    recuperaComentarios(codigoPublicacao);
  };

  useEffect(() => {
    recuperaComentarios(codigoPublicacao);
    recuperaPublicacao();
  }, [codigoPublicacao]);

  return (
    <ComentarioContext.Provider
      value={{
        remover,
        handleChange,
        acaoCadastrar,
        recuperar,
        carregando,
        setCarrengando,
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
