
import { useState , useEffect , createContext , useContext } from "react";
import axios from "axios";

const Authcontex = createContext()





const AuthProvider = ({children}) => {

    const [auth , setAuth] = useState({
        token : null,
        user : ""
    })
    axios.defaults.headers.common['Authorization'] = auth?.token
    useEffect(() => {
        const data = localStorage.getItem("auth" )
        console.log(data)
        if(data){
            const prsstdat =  JSON.parse(data) 
            console.log(prsstdat)
            setAuth({
                ...auth,
                user : prsstdat.user,
                token : prsstdat.token
            })

          
        }

    },[])

  return (
     <Authcontex.Provider  value={{auth,setAuth}}>
        {children}
     </Authcontex.Provider>
  )
}

 const useAuth = () => useContext(Authcontex)


export {AuthProvider , useAuth}
