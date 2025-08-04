import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import VeterinarioForm from "../components/VeterinarioForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="registroVeterinario" element={<VeterinarioForm />} />
    </Routes>
  );
};

export default AppRoutes;
