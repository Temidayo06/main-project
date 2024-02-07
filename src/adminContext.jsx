import { createContext, useState, useEffect, useContext } from "react";
import { useGlobalContext } from "./Hooks/useGlobalContext";
import axios from "axios";

const AdminContext = createContext()
export const useAdminContext = ()=> useContext(AdminContext)



const AdminProvider = ({children})=>{
    const {BASE_URL}= useGlobalContext()
   
    const [properties, setProperties] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [type, setType] = useState('')
    const [location, setLocation] = useState('')

const updateType= (e)=>{
    console.log(e.target.value);
    setType(e.target.value)
}


 const url = `${BASE_URL}/property?type=${type}&&location=${location}`
    const getProperties = async()=>{
        try {
            setIsLoading(true)
            const {data} = await axios(url)
            console.log(data);
            setProperties(data.properties)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getProperties()
    }, [type])


    return <AdminContext.Provider value={{isLoading, properties, type, updateType, location, setLocation}}>
        {children}
    </AdminContext.Provider>
}

export default AdminProvider