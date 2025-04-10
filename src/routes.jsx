import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CoresJogadoresProvider } from "./services/coresjogadores";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Mesa from "./pages/Mesa";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard"

export default function AppRoutes() {
  return (
    <Router>
      <CoresJogadoresProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/mesa" element={<Mesa />} />
        </Routes>
      </Layout>
      </CoresJogadoresProvider>
    </Router>
  );
}