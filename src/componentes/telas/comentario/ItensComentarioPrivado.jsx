import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import ComentarioContext from "./ComentarioContext";
import "../publicacao/Publicacao.css";
import Autenticacao from "../../seg/Autenticacao";
import jwt_decode from "jwt-decode";

function ItensComentarioPrivado({ publicacao }) {
  const {
    setComentario,
    remover,
    setEditar,
    recuperar,
    alerta,
    setAlerta,
    listaComentarios,
  } = useContext(ComentarioContext);

  const autenticacao = Autenticacao.pegaAutenticacao();
  const decoded = jwt_decode(autenticacao.token);

  // Custom Bootstrap validation styles
  document.addEventListener("DOMContentLoaded", function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  });

  //let listaObjetosInvertida = listaComentarios.slice().reverse();
  return (
    <div className="BoxComentario ">
      <Alerta alerta={alerta} />
      <div id="BtnNovo">
        <h1>
          {" "}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalFormularioComentario"
            title="Novo"
            onClick={() => {
              setComentario({
                codigo: 0,
                texto: "",
                data: "",
                usuario: decoded.usuario.senha,
                publicacao: publicacao,
              });
              setEditar(false);
              setAlerta({ status: "", message: "" });
            }}
          >
            Novo Comentario <i className="bi bi-file-earmark-plus"></i>
          </button>
        </h1>
      </div>
      {listaComentarios.length === 0 && <h1>Nenhum comentario </h1>}
      {listaComentarios.length > 0 && (
        <div className="card border-secondary mb-3 card " id="bodyPublicacao">
          {listaComentarios.map((e) => (
            <div className="col" key={e.id}>
              <div className="card " id="cardComentario">
                <div className="card-Comentario " id="card-Comentario">
                  <div className="card-usuario" id="usuario">
                    {decoded.usuario.senha === e.usuario && (
                      <div id="botoes">
                        <button
                          className="btn btn-danger"
                          title="Remover"
                          id="buttonsEdição"
                          onClick={() => {
                            remover(e);
                          }}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                        <button
                          className="btn btn-info"
                          title="Edicao"
                          data-bs-toggle="modal"
                          data-bs-target="#modalFormularioComentario"
                          id="buttonsEdição"
                          onClick={() => {
                            recuperar(e.codigo);
                            setEditar(true);
                            setAlerta({ status: "", message: "" });
                          }}
                        >
                          <i className="bi bi-pencil-square"></i>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="card-text" id="cardText">
                    <br />
                    {e.texto} <br />
                    <br />
                    <div id="rodape">
                      <div id="data">
                        <small className="text-body-secondary">{e.data}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ItensComentarioPrivado;
