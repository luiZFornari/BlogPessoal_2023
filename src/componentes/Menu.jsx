import { NavLink, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Publicacao from "./telas/publicacao/Publicacao";

const Menu = () => (
  <>
    {" "}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" aria-current="page" exact to="/">
          BlogPessoal 2023 Luiz Felipe Fornari
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                exact
                href="https://www.facebook.com/profile.php?id=100011056356657"
              >
                <i className="bi bi-facebook"> Facebook</i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                exact
                href="https://www.linkedin.com/in/luiz-felipe-fornari-ab438419b/"
              >
                <i className="bi bi-linkedin"> Linkedin</i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                exact
                href="https://www.instagram.com/luizfelipefornari/"
              >
                <i className="bi bi-instagram"> Instagram</i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                exact
                href="https://github.com/luiZFornari"
              >
                <i className="bi bi-github"> GitHub</i>
              </a>
            </li>
          </ul>
        </div>
        <button className="nav-item btn btn-secondary">
          <NavLink
            className="nav-link active"
            aria-current="page"
            exact
            to="/registrar"
          >
            Registrar
          </NavLink>
        </button>
        <button className="nav-item btn btn-secondary">
          <NavLink
            className="nav-link active"
            aria-current="page"
            exact
            to="/login"
          >
            Login
          </NavLink>
        </button>
      </div>
    </nav>
    <Outlet />
  </>
);

export default Menu;
