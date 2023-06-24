import Autenticacao from "../seg/Autenticacao";

export const getPublicacoesAPI = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/Publicacoes`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};

export const getPublicacoesPorCodigoAPI = async (codigo) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/Publicacoes/${codigo}`,
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

export const deletePublicacoesPorCodigoAPI = async (codigo) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/Publicacoes/${codigo}`,
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

export const cadastraPublicacoesAPI = async (objeto, metodo) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/Publicacoes`,
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
