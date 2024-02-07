import React from "react";
import ContactImg from "../../../assets/images/contactImg.png"
import { GoArrowUpRight } from "react-icons/go";

const UserPropertyDetailForm = ({property}) => {
  return <div>
            <p className="fw-bold fs-4">Contact sales support</p>

            <div className="d-flex align-items-center gap-2 ">
                <img src= {property.salesSupport.avatar} alt="contact-img" className="rounded rounded-circle  avatar" />
                <div>
                    <p className="fw-bold lh-1">{property.salesSupport.name}</p>
                    <p className="lh-1">{property.salesSupport.phoneNumber}</p>
                    <p className="lh-1">{property.salesSupport.whatsappNumber}</p>
                </div>
            </div>

            <form>
                <label className="form-label ">Name</label>
                <input type="text" className="form-control" />
                <label className="form-label ">Email</label>
                <input type="email" className="form-control" />
                <label className="form-label ">Phone</label>
                <input type="tel" className="form-control" />

                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="" cols="30" rows="10" className="form-control"></textarea>

                <button className="w-100 btn bg-success fw-bold text-white my-3 ">Send Message</button>
                <button className="btn w-100 text-success border-success ">Whatsapp <GoArrowUpRight /></button>
            </form>
  </div>;
};

export default UserPropertyDetailForm;
