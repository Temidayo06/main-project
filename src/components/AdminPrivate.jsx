import { Navigate, Outlet } from "react-router-dom";

const AdminPrivate = () => {
  const token = localStorage.getItem("token");
  const content = token ? <Outlet /> : <Navigate to="/admin/login" />;
  return content;
};

export default AdminPrivate;
