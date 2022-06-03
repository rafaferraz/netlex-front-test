import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Metodo1 from "../pages/Metodo1";
import Metodo2 from "../pages/Metodo2";
import Metodo3 from "../pages/Metodo3";
import Erro from "../pages/Erro";

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/metodo-1" element={<Metodo1 />} />
      <Route exact path="/metodo-2" element={<Metodo2 />} />
      <Route exact path="/metodo-3" element={<Metodo3 />} />
      <Route exact path="*" element={<Erro />} />
    </Routes>
  );
}
