
import React from 'react'
import Adminlayout from '../components/Adminlayout'
import axios from "axios";
import { useEffect, useState } from 'react'
import {toast} from "react-toastify"
import { Link } from "react-router-dom";
import { Layout } from 'antd';


const Producte = () => {
    const [products, setProducts] = useState([]);
    
  



      const getAllProducts = async () => {
        try {
          const { data } = await axios.get("http://localhost:9800/allproducte");
          if (data?.success) {
            setProducts(data.products);
          }
        } catch (error) {
          console.log(error);
          toast.error('some thing mething ....')
        //  toast.error("Something wwent wrong in getting catgeory");
        }
      };
    
      useEffect(() => {
        getAllProducts()
      }, []);
    

 


      return (
        <Layout>
    <div className="row">
  <div className="col-md-3">
    <Adminlayout />
  </div>
  <div className="col-md-9">
    <h1 className="text-center">All Products List</h1>
    <div className="d-flex flex-wrap">
      {products?.map((p) => (
        <Link
          key={p._id}
          to={`/dashboard/admin/updtedprudcts/${p.slug}`}
          className="product-link"
        >
          <div className="card m-2" style={{ width: "18rem" }}>
            <img
              src={`http://localhost:9800/product-photo/${p._id}`}
              className="card-img-top"
              alt={p.name}
              style={{ maxHeight: "200px" }} // Adjust the max height of the image
            />
            <div className="card-body">
              <h5 className="card-title">{p.name}</h5>
              <p className="card-text">{p.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>

        </Layout>
      );

}

export default Producte