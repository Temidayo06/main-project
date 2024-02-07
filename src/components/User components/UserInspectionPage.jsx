import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdAccessTimeFilled, MdTextsms } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../../Hooks/useGlobalContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Inspection = () => {
  const { BASE_URL } = useGlobalContext();
  const [inspection, setInspection] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
    inspectionDate: "",
    inspectionTime: "",
    message: "",
  });
  const [clicked, setClicked] = useState(false);
  const handleChange = (e) => {
    setInspection({ ...inspection, [e.target.name]: e.target.value });
  };
  const token = localStorage.getItem("token");
  const handleInspectionSubmit = async (e) => {
    e.preventDefault();
    setClicked(true);

    try {
      const { data } = await axios.post(`${BASE_URL}/inspection`, {
        ...inspection,
      }, {
        headers:{
          Authorization: `Bearer ${token}`,
        }
      }
      );
      if(data.success) {
        toast.success('INSPECTION SUBMITTED')
        setClicked(false)
        setInspection({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          location: "",
          inspectionDate: "",
          inspectionTime: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.err);
      setClicked(false);
      setInspection({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        location: "",
        inspectionDate: "",
        inspectionTime: "",
        message: "",
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="container py-4 ">
        <div className="text-center">
          <h3>BOOK AN INSPECTION WITH US</h3>
          <p className="blue-text">
            Please fill this form to book an inspection with us.
          </p>
        </div>

        <div className="container py-3 ">
          <form onSubmit={handleInspectionSubmit}>
            <div className="d-block d-md-flex gap-2">
              <div className=" border position-relative  rounded-3 border-dark d-flex gap-1  justify-content-center align-items-center w-100   shadow shadow-sm">
                <FaUser className="text-success fs-5 position-absolute start-0 ms-2  " />
                <input
                  type="text"
                  className="border-0 px-5 py-3  shadow-none form-control h-100"
                  placeholder="First Name"
                  required
                  name="firstName"
                  value={inspection.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <br />
                <br />
              </div>

              <div className="dark border position-relative  rounded-3 border-dark d-flex gap-1 justify-content-center align-items-center w-100 shadow shadow-sm">
                <FaUser className="text-success fs-5 position-absolute start-0 ms-2" />
                <input
                  type="text"
                  className="border-0 px-5 py-3 shadow-none form-control h-100 "
                  placeholder="Last Name"
                  required
                  name="lastName"
                  value={inspection.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />
            <br />

            <div>
              <div className="dark border position-relative  rounded-3 border-dark d-flex gap-1 justify-content-center align-items-center shadow shadow-sm ">
                <MdEmail className="text-success fs-5 position-absolute start-0 ms-2" />
                <input
                  type="email"
                  className="border-0 px-5 py-3 shadow-none form-control h-100 "
                  placeholder="Email-address"
                  required
                  name="email"
                  value={inspection.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <br />
            <br />

            <div>
              <div className="dark border position-relative  rounded-3 border-dark gap-1 d-flex justify-content-center align-items-center shadow shadow-sm">
                <FaPhoneAlt className="text-success fs-5 position-absolute start-0 ms-2" />
                <input
                  type="tel"
                  className="border-0 px-5 py-3 shadow-none form-control h-100"
                  placeholder="Phone Number"
                  required
                  name="phoneNumber"
                  value={inspection.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />
            <br />

            <div>
              <div className="dark border position-relative rounded-3 border-dark d-flex gap-1 justify-content-center align-items-center shadow shadow-sm ">
                <FaLocationDot className="text-success fs-5 position-absolute start-0 ms-2" />
                <input
                  type="text"
                  className="border-0 px-5 py-3 shadow-none form-control h-100"
                  placeholder="Location"
                  required
                  name="location"
                  value={inspection.location}
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />
            <br />

            <div className="d-block d-md-flex gap-2">
              <div className="dark border position-relative  rounded-3 border-dark d-flex gap-1 justify-content-center align-items-center w-100 shadow shadow-sm">
                <SlCalender className="text-success fs-12 position-absolute start-0 ms-2 " />
                <input
                  type="Date"
                  className="border-0 px-5 py-3 shadow-none form-control h-100"
                  required
                  name="inspectionDate"
                  value={inspection.inspectionDate}
                  onChange={handleChange}
                />
              </div>
              <div>
                <br />
                <br />
              </div>

              <div className="dark border position-relative  rounded-3 border-dark d-flex gap-1 justify-content-center align-items-center w-100 shadow shadow-sm">
                <MdAccessTimeFilled className="text-success fs-12 position-absolute start-0 ms-2  " />
                <input
                  type="time"
                  className="border-0 px-5 py-3 shadow-none form-control h-100"
                  required
                  name="inspectionTime"
                  value={inspection.inspectionTime}
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />
            <br />

            <div>
              <div className="dark position-relative  border rounded-3 border-dark border gap-1 rounded-3 border-dark d-flex justify-content-center align-items-start w-100 shadow shadow-md ">
                <MdTextsms className="text-success mt-2 fs-5 position-absolute start-0 ms-2  " />

                <textarea
                  cols="30"
                  rows="10"
                  className="border-0 px-5 shadow-none form-control h-100 "
                  placeholder=" Additional Message"
                  name="message"
                  value={inspection.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <button
                type="submit"
                className="btn rounded-3 text-white fs-6 py-2 my-3 w-50"
                style={{ backgroundColor: "#3D9970" }}
              >
                {clicked ? "SUBMITTING..." : "SUBMIT"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inspection;
