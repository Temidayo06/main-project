import React, { useState } from "react";
import "../../../styles/User Styles/UserHero.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { useGlobalContext } from "../../../Hooks/useGlobalContext";

const UserHeroSection = () => {
  const { bedroomCount, decrementBedroom, incrementBedroom } =
    useGlobalContext();
  return (
    <div className="userhero-section ">
      <h1 className="mt-3 fw-bold ">
        Find the Perfect Place to Call <br /> Your Own
      </h1>
    </div>
  );
};

export default UserHeroSection;
