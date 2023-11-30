
import React from 'react'

import Adminlayout from '../../components/Adminlayout'
import { useAuth } from '../../components/contex/Contex';
import Layout from "../../components/Layout";



const AdminDashbourd = () => {
  const {auth,setAuth} = useAuth()

  return (


 
  <Layout title={'dashour admin'}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <Adminlayout />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
      )
}

export default AdminDashbourd