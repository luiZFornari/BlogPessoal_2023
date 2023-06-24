import Autenticacao from "../seg/Autenticacao";

export const getComentarioPorPublicacaoAPI = async (codigo) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/comentario/publicacao/${codigo}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": Autenticacao.pegaAutenticacao().token,
      },
    }
  );
  const data = await response.json();
  return data;
};

export const getComentarioPorCodigoAPI = async (codigo) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/comentario/${codigo}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": Autenticacao.pegaAutenticacao().token,
      },
    }
  );
  const data = await response.json();
  return data;
};

export const deleteComentarioPorCodigoAPI = async (codigo) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/comentario/${codigo}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": Autenticacao.pegaAutenticacao().token,
      },
    }
  );
  const data = await response.json();
  return data;
};

export const cadastraComentariosAPI = async (objeto, metodo) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/comentario`,
    {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
        "x-access-token": Autenticacao.pegaAutenticacao().token,
      },
      body: JSON.stringify(objeto),
    }
  );
  const data = await response.json();
  return data;
};
