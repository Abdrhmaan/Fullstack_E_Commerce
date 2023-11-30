
import { Layout } from 'antd';
import React, { useState } from 'react'
import Usermenu from '../components/Usermenu';
import{toast} from "react-toastify"

import { useAuth } from '../components/contex/Contex';
 import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Profile = () => {
  const {auth,setAuth} = useAuth()
  const navaigate = useNavigate
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("http://localhost:9800/profile", {
        name,
        email,
        password,
        phone,
        address,
      });
      console.log(data)
      if (data?.errro) {
      
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");

      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
   
    }
  };
  return (

      <Layout title={"Your Profile"}>
        <div className="container m-3 p-3">
  <div className="row">
    <div className="col-md-3">
      <Usermenu />
    </div>
    <div className="col-md-9">
      <div className="form-container">
        <form>
          <h4 className="title">USER PROFILE</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="nameInput"
              placeholder="Enter Your Name"
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="emailInput"
              placeholder="Enter Your Email"
              disabled
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="passwordInput"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="phoneInput"
              placeholder="Enter Your Phone"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="addressInput"
              placeholder="Enter Your Address"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            UPDATE
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

      </Layout>
    );



    

}

export default Profile