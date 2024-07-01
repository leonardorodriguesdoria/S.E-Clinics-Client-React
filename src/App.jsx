import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Medicos from "./pages/Medicos";
import Clinicas from "./pages/Clinicas";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/medicos" element={<Medicos />}></Route>
        <Route path="/clinicas" element={<Clinicas />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
