import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Mesa from "./pages/Mesa";
import Layout from "./components/Layout";

export default function AppRoutes() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/mesa" element={<Mesa />} />
      </Routes>
      </Layout>
    </Router>
  );
}