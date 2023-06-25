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
import ItensPrivado from "./ItensPrivados";
import Formulario from "./Formulario";
import withAuth from "../../seg/WithAuth";

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
    } catch (err) {}
  };

  const acaoCadastrar = async (e) => {
    e.preventDefault();
    const metodo = editar ? "PUT" : "POST";
    try {
      let retornoAPI = await cadastraPublicacoesAPI(objeto, metodo);
      setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
      setObjeto(retornoAPI.objeto);
      if (!editar) {
        setEditar(true);
      }
    } catch (err) {
      console.log(err);
    }
    recuperaPublicacoes();
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
    } catch (err) {}
  };

  const remover = async (objeto) => {
    if (window.confirm("Deseja remover este objeto?")) {
      try {
        let retornoAPI = await deletePublicacoesPorCodigoAPI(objeto.codigo);
        setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
      } catch (err) {}
    }
    recuperaPublicacoes();
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
        remover,
        objeto,
        setObjeto,
        editar,
        setEditar,
        recuperar,
        acaoCadastrar,
        handleChange,
      }}
    >
      <Carregando carregando={carregando}>
        <ItensPrivado />
      </Carregando>
      <Formulario />
    </PublicacoesContext.Provider>
  );
}

export default Publicacao;
