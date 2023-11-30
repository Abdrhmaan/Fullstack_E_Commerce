import React from 'react'
import Layout from '../components/Layout'
import { toast } from "react-toastify"
const Policy = () => {
    return (
        <Layout title={'pLICY'}>
       <div className="container text-center mt-5">
      <h2>policy</h2>
      <button onClick={() => toast.error("cde")}>toast</button>
      </div>
        </Layout>
     
      )
}

export default Policy