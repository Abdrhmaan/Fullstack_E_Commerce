
import React from 'react'
import { useState,useEffect } from 'react';
import Layout from '../components/Layout'
import { useAuth } from '../components/contex/Contex';
import {toast} from "react-toastify"
import axios from 'axios';
import { Checkbox, Radio } from "antd";
import { Prices } from './Price';
import { useNavigate } from 'react-router-dom';
import {Usecart} from '../components/contex/Hooks/Cart';





const Hom = () => {
  
  const naviate = useNavigate()
  const  [cart, setCart] = Usecart();
  console.log(cart)

 

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("http://localhost:9800/getcategory");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal()

  }, []);
  
 
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`http://localhost:9800/product-list/${page}`);
      console.log(data)
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };




  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`http://localhost:9800/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getTotal = async () => {
    try {
      const { data } = await axios.get("http://localhost:9800/product-conte");
      console.log(data)
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };


  

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("http://localhost:9800/product-filters", {
        checked,
        radio,
      });
      console.log(data)
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };





  return (
    <Layout title={"ALl Products - Best offers "}>
<div className="container-fluid mt-3">
  <div className="row">
    <div className="col-md-3">
      <div className="sidebar">
        <h4 className="text-center">Filter By Category</h4>
        <div className="category-filter">
          {categories?.map((c) => (
            <Checkbox
              key={c._id}
              onChange={(e) => handleFilter(e.target.checked, c._id)}
            >
              {c.name}
            </Checkbox>
          ))}
        </div>
        <h4 className="text-center mt-4">Sort By</h4>
        <div className="sort-filter">
          <Radio.Group onChange={(e) => setRadio(e.target.value)}>
            {Prices?.map((p) => (
              <div key={p._id}>
                <Radio value={p.array}>{p.name}</Radio>
              </div>
            ))}
          </Radio.Group>
        </div>
        <div className="reset-filters">
          <button
            className="btn btn-danger"
            onClick={() => window.location.reload()}
          >
            RESET FILTERS
          </button>
        </div>
      </div>
    </div>
    <div className="col-md-9">
      <h1 className="text-center">All Products</h1>
      <div className="product-cards d-flex flex-wrap justify-content-center">
        {products?.map((p) => (
          <div className="card m-2 product-card">
            <img
              src={`http://localhost:9800/product-photo/${p._id}`}
              className="card-img-top"
              alt={p.name}
            />
            <div className="card-body">
              <h5 className="card-title">{p.name}</h5>
              <p className="card-description">
                {p.description.substring(0, 60)}...
              </p>
              <div className="price-and-buttons">
                <p className="card-price">$ {p.price}</p>
                <button class="btn btn-primary ms-1" onClick={() => naviate(`/detailsproducte/${p.slug}`)}>More Details</button>
                <button className="btn btn-secondary ms-1"     onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                    
                     
                    }}  >ADD TO CART</button>
            
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="m-2 p-3">

            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div>
    </div>
  </div>
</div>




    </Layout>
  );


}

export default Hom