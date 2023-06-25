import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import ComentarioContext from "./ComentarioContext";
import "../publicacao/Publicacao.css";
import Autenticacao from "../../seg/Autenticacao";
import jwt_decode from "jwt-decode";

function ItensComentario() {
  const { alerta, listaComentarios } = useContext(ComentarioContext);

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
      {listaComentarios.length === 0 && <h1>Nenhum comentario </h1>}
      {listaComentarios.length > 0 && (
        <div className="card border-secondary mb-3 card " id="bodyPublicacao">
          {listaComentarios.map((e) => (
            <div className="col" key={e.id}>
              <div className="card " id="cardComentario">
                <div className="card-Comentario " id="card-Comentario">
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

export default ItensComentario;
