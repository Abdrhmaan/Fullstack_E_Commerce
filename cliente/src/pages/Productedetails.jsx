import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';

const ProductDetails = () => {
  const [product, setProduct] = useState({});

  console.log(product);

  const prms = useParams();

  useEffect(() => {
    if (prms?.slug) getProduct();
  }, [prms?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`http://localhost:9800/get-product/${prms.slug}`);

      setProduct(data?.product);
      
   
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <Layout>
      <div className="product-container">
        <div className="product-image">
          <img
          src={`http://localhost:9800/product-photo/${product._id}`}
            alt={product.name}
          />
        </div>
        <div className="product-details">
          <h1 className="text-center">Product Details</h1>
          <h6>Name: {product.name}</h6>
          <h6>Description: {product.description}</h6>
          <h6>Price: {product.price}</h6>
          <h6>Category: {product?.category?.name}</h6>
          <button className="btn btn-secondary">ADD TO CART</button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
