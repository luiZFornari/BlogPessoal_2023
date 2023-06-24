import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import PublicacaoContext from "./PublicacaoContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";

function Form() {
  const { objeto, handleChange, acaoCadastrar, alerta } =
    useContext(PublicacaoContext);

  return (
    <Dialogo
      id="modalEdicao"
      titulo="Nova Publicação"
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
        value={objeto.codigo}
        onchange={handleChange}
        requerido={false}
        readonly={true}
      />
      <CampoEntrada
        tipo="text"
        label="Titulo"
        id="txttitulo"
        entrada="input"
        name="titulo"
        value={objeto.titulo}
        onchange={handleChange}
        requerido={true}
        readonly={false}
        msgvalido="Titulo OK"
        msginvalido="Informe o Titulo"
        maxlength={150}
      />
      <CampoEntrada
        id="txtDescricao"
        label="Descrição"
        entrada="textarea"
        tipo="text"
        name="descricao"
        value={objeto.descricao}
        onchange={handleChange}
        requerido={true}
        readonly={false}
        maxlength={40}
        msgvalido="Descrição OK"
        msginvalido="Informe a descrição"
      />
      <CampoEntrada
        tipo="date"
        label="Data"
        entrada="input"
        id="txtData"
        name="data"
        value={objeto.data}
        onchange={handleChange}
        requerido={true}
        readonly={false}
        msgvalido="Data OK"
        msginvalido="Informe o Data"
      />
      <CampoEntrada
        tipo="text"
        label="Imagem"
        entrada="input"
        id="txtimagem"
        name="imagem"
        value={objeto.imagem}
        onchange={handleChange}
        requerido={false}
        readonly={false}
      />
      <CampoEntrada
        tipo="text"
        label="Link"
        id="txtlink"
        entrada="input"
        name="link"
        value={objeto.link}
        onchange={handleChange}
        requerido={false}
        readonly={false}
      />
    </Dialogo>
  );
}

export default Form;
