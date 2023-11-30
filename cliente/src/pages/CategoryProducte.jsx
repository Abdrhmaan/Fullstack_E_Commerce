

import Layout from "../components/Layout";

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CategoryProducte = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);

  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(`http://localhost:9800/product-category/${params.slug}`);
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3">
        <h4 className="text-center mb-3">Category - {category?.name}</h4>
        <h6 className="text-center mb-4">{products?.length} results found</h6>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {products?.map((p) => (
                <div className="col" key={p._id}>
                  <div className="card">
                    <img
                      src={`http://localhost:9800/product-photo/${p._id}`}
                      className="card-img-top transition-image" // Added a class for the transition effect
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.description.substring(0, 60)}...</p>
                      <p className="card-text">$ {p.price}</p>
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => navigate(`/detailsproducte/${p.slug}`)}
                      >
                        More Details
                      </button>
                    

                      <button className="btn btn-secondary">ADD TO CART</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProducte;
