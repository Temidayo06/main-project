import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
  const token = localStorage.getItem("token");
  const content = token ? <Outlet /> : <Navigate to="/login" />;
  return content;
};

export default Private;
