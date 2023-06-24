import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core/dist/cjs/popper.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import MenuPrivado from "./componentes/MenuPrivado";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./componentes/telas/login/Login";
import Menu from "./componentes/Menu";
import Home from "./componentes/telas/Home";
import Registrar from "./componentes/telas/registro/Form";
import Publicacao from "./componentes/telas/publicacao/Publicacao";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Menu />}>
          <Route path="login" element={<Login />} />
          <Route path="registrar" element={<Registrar />} />
          <Route index element={<Publicacao />} />
        </Route>

        <Route exact path="/" element={<Menu />} />
        <Route path="/privado" element={<MenuPrivado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
