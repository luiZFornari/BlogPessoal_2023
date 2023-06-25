import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import PublicacaoContext from "./PublicacaoContext";
import "./Publicacao.css";
import Comentario from "../comentario/Comentario";

function ItensPublico() {
  const { alerta, listaObjetos } = useContext(PublicacaoContext);

  (function () {
    "use strict";

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
  })();

  let listaObjetosInvertida = listaObjetos.slice().reverse();
  return (
    <div className="BoxPublicação ">
      <Alerta alerta={alerta} />
      <div id="BtnNovo"></div>
      {listaObjetosInvertida.length === 0 && (
        <h1>Nenhuma publicaçao encontrada</h1>
      )}
      {listaObjetosInvertida.length > 0 && (
        <div className="card border-secondary mb-3 card " id="bodyPublicacao">
          {listaObjetosInvertida.map((objeto) => (
            <div class="col">
              <div ClassName="card " id="cardPublicacao">
                <div ClassName="card-body " id="card-body">
                  <div ClassName="card-title" id="cardtitle">
                    <div id="titulo">{objeto.titulo}</div>
                  </div>
                  <div ClassName="card-text" id="cardText">
                    <br />
                    {objeto.descricao} <br />
                    <div id="boximagem">
                      {objeto.imagem && (
                        <img src={objeto.imagem} alt="Imagem" id="img" />
                      )}
                    </div>
                    <br />
                    <div className="button-container">
                      <div className="button">
                        <button
                          class="btn btn-primary"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#codigo${objeto.codigo}`}
                          aria-expanded="false"
                          aria-controls={`codigo${objeto.codigo}`}
                        >
                          Comentarios
                        </button>
                      </div>
                      <div className="data">
                        <small ClassName="text-body-secondary">
                          {objeto.data}
                        </small>
                      </div>
                      <div className="button">
                        {objeto.link && (
                          <a
                            href={objeto.link}
                            class="btn btn-primary "
                            tabindex="-1"
                            role="button"
                            aria-disabled="true"
                            target="_blank"
                          >
                            Mais Informaçoes
                          </a>
                        )}
                      </div>
                    </div>
                    <div class="collapse" id={`codigo${objeto.codigo}`}>
                      <div class="card card-body">
                        <Comentario codigoPublicacao={objeto.codigo} />
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

export default ItensPublico;
