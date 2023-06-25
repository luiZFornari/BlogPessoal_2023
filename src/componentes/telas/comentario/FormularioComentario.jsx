import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import ComentarioContext from "./ComentarioContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";
import "Formulario.css";

function FormularioComentario() {
  const { comentario, handleChange, acaoCadastrar, alerta } =
    useContext(ComentarioContext);

  return (
    <Dialogo
      id="modalFormularioComentario"
      titulo="Novo Comentario"
      acaoCadastrar={acaoCadastrar}
      idform="formulario"
    >
      <Alerta alerta={alerta} />
      <CampoEntrada
        id="txtCodigo"
        label="Código"
        entrada="input"
        tipo="number"
        name="codigo"
        value={comentario.codigo}
        onChange={handleChange}
        requerido={false}
        readonly={true}
      />
      <CampoEntrada
        tipo="text"
        label="Titulo"
        id="txttitulo"
        entrada="input"
        name="titulo"
        value={comentario.texto}
        onchange={handleChange}
        requerido={true}
        readonly={false}
        msgvalido="Titulo OK"
        msginvalido="Informe o Titulo"
        maxlength={150}
      />
      <CampoEntrada
        tipo="date"
        label="Data"
        entrada="input"
        id="txtData"
        name="data"
        value={comentario.data}
        onChange={handleChange}
        requerido={true}
        readonly={false}
        msgvalido="Data OK"
        msginvalido="Informe o Data"
      />
      <CampoEntrada
        tipo="text"
        label="Usuario"
        entrada="input"
        id="txtUsuario"
        name="usuario"
        value={comentario.usuario}
        onChange={handleChange}
        requerido={true}
        readonly={false}
      />
      <CampoEntrada
        tipo="text"
        label="Publicacao"
        entrada="input"
        id="txtPublicacao"
        name="publicacao"
        value={comentario.publicacao}
        onChange={handleChange}
        requerido={true}
        readonly={false}
      />
    </Dialogo>
  );
}

export default FormularioComentario;
