import "bootstrap/dist/css/bootstrap.min.css";
import House from "../../assets/images/House.png";
import "../../styles/Admin Styles/signupform.css";
import search from "../../assets/images/search.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Hooks/useGlobalContext";

const SigninForm = () => {
  const redirect = useNavigate();
  const { BASE_URL } = useGlobalContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const [clicked, setClicked] = useState(false);

  const togglePassword = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setClicked(true);
    try {
      const { data } = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      if (data) {
        setClicked(false);
        console.log(data);
        redirect("/admin/dashboard");
        toast.success("Log In Successfully");
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      setClicked(false);
      console.log(error);

      toast.error(error.response?.data?.err);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="d-flex justify-content-center vh-100 w-100">
      <ToastContainer/>
      <div className="input-field bg-light p-3 p-md-5 col-md-6 col-12 ">
        <div className="header lh-1 mb-4 text-center text-md-start">
          <p className="text fw-bold fs-4">Sign in to your admin account.</p>
          <p className=" fs-6">Enter your details to access your account</p>
        </div>
        <form className="inputs " onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email1" className="form-label fs-6">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="johndoe@gmail.com"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 position-relative">
            <div className="password-field">
              <label htmlFor="password" className="form-label fs-6">
                Password
              </label>
            </div>
            <input
              type={show ? "password" : "text"}
              className="form-control shadow-none "
              id="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              className="border-none border-0 outline-none bg-transparent position-absolute top-50"
              style={{ right: "7px", backgroundColor: "transparent" }}
              onClick={togglePassword}
            >
              {show ? <FaEyeSlash /> : <IoEyeSharp />}
            </button>
          </div>

          <div className="form-check py-2">
            <input
              className="usersignup-checkbox shadow-none ms-0"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label " htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-success text-center w-100 btn-lg"
          >
            {clicked ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="mt-2">
          New user?{" "}
          <Link to="/admin/signup" className="fw-bold text-success">
            Sign up
          </Link>
        </p>
      </div>
      <img
        src={House}
        alt="House Image"
        className=" w-50 rounded-left d-none d-md-block "
      />
    </div>
  );
};

export default SigninForm;