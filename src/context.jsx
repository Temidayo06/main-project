import { createContext, useEffect, useState } from "react";
import { properties } from "./mockData/properties";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import axios from "axios";

export const AppContext = createContext();

const CustomPrevArrow = (props) => (
  <div className="custom-arrow custom-prev-arrow" onClick={props.onClick}>
    <FaLongArrowAltLeft size="40px" />
  </div>
);

const CustomNextArrow = (props) => (
  <div className="custom-arrow custom-next-arrow" onClick={props.onClick}>
    <FaLongArrowAltRight size="40px" />
  </div>
);

const AppProvider = ({ children }) => {
  const [bedroomCount, setBedroomCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const setLightMode = () => {
    setIsDark(!isDark);
    console.log("clicked light mode");
  };

  const incrementBedroom = () => {
    setBedroomCount(bedroomCount + 1);
  };

  const decrementBedroom = () => {
    if (bedroomCount > 0) {
      setBedroomCount(bedroomCount - 1);
    }
  };
const BASE_URL = "https://betahomeapidayo.onrender.com/api/v1"
const [location, setLocation] = useState('')
const [type, setType] = useState('')
const [bed, setBbed] = useState('')
const [isLoading, setIsLoading] = useState(true)
const [properties, setProperties] = useState([])
const url =`${BASE_URL}/property?location=${location}&type=${type}&bedroom=${bed}`
const getProperties = async () => {
  setIsLoading(true)
  try {
    const { data} = await axios(url)
    setProperties(data.properties)
    setIsLoading(false)
  } catch (error) {
    console.log(error)
  }
}
useEffect(() =>{
  getProperties()
}, [type, location, bed, ])

  return (
    <AppContext.Provider
      value={{
        properties,
        bedroomCount,
        incrementBedroom,
        decrementBedroom,
        isDark,
        setIsDark,
        setLightMode,
        BASE_URL,
        location,
        type,
        isLoading,
        setBbed,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
