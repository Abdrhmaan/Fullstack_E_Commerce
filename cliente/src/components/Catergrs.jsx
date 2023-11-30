
import React from 'react';
import { Link } from 'react-router-dom';
import Category from './contex/Hooks/Category';// Import your category data source
import Layout from './Layout';



const Catergrs = () => {
  const categories = Category();

  
    return (
      <div>
        <Layout title={'/categories'}>
          <div className="container text-center"> {/* Center align the content */}
            <h1 style={{ marginTop: '80px' }}>All categories</h1> {/* Add margin-top */}
            <div className="row">
              {categories.map((c) => (
                <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
                  <Link to={`/category/${c.slug}`} className="btn btn-primary transition-button">
                    {c.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Layout>
      </div>
    );
  };
  
  


export default Catergrs;
