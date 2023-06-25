import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import ComentarioContext from "./ComentarioContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";
import "./Formulario.css";

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
        id="txtcodigo"
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
        label="Texto"
        id="txttexto"
        entrada="input"
        name="texto"
        value={comentario.texto}
        onchange={handleChange}
        requerido={true}
        readonly={false}
        msgvalido="Texto OK"
        msginvalido="Informe o Texto"
        maxlength={150}
      />
      <CampoEntrada
        tipo="date"
        label="Data"
        entrada="input"
        id="txtData"
        name="data"
        value={comentario.data}
        onchange={handleChange}
        requerido={true}
        readonly={false}
        msgvalido="Data OK"
        msginvalido="Informe o Data"
      />
      <CampoEntrada
        id="txtusuario"
        label="Usuario"
        entrada="input"
        tipo="number"
        name="usuario"
        value={comentario.usuario}
        onchange={handleChange}
        requerido={true}
        readonly={true}
      />
      <CampoEntrada
        tipo="text"
        label="Publicacao"
        entrada="input"
        id="txtpublicacao"
        name="publicacao"
        value={comentario.publicacao}
        onChange={handleChange}
        requerido={true}
        readonly={true}
      />
    </Dialogo>
  );
}

export default FormularioComentario;
