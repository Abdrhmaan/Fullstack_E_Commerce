import { useState, useEffect } from "react";
import { useAuth } from "../contex/Contex";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";
;
const Protect = () => {
    const [ok, setOk] = useState(false);
    const {auth,setAuth} = useAuth()
    useEffect(() => {
        const authCheck = async () => {
          const res = await axios.get('http://localhost:9800/get');
          if (res.data.ok) {
            setOk(true);
          } else {
            setOk(false);
          }
        };
        if (auth?.token) authCheck();
      }, [auth?.token]);

      return ok ? <Outlet /> : <Spinner />;
    }

export default Protect