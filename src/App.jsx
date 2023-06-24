import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core/dist/cjs/popper.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import MenuPrivado from "./componentes/MenuPrivado";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./componentes/telas/login/Login";
import MenuPublico from "./componentes/MenuPublico";
import Registrar from "./componentes/telas/registro/Form";
import Menu from "./componentes/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MenuPublico />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registrar" element={<Registrar />} />
        <Route exact path="/privado" element={<MenuPrivado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
