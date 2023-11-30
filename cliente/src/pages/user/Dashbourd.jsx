
import React from 'react'
import Layout from '../../components/Layout'
import { useAuth } from '../../components/contex/Contex'

import { Link } from 'react-router-dom';

const Dashbourd = () => {
  const {auth,setAuth} = useAuth()
  return (
   
 
<Layout title={"Dashboard - Ecommerce App"}>



    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/orders" className="nav-link">
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/dashboard/user/profile' className="nav-link">
              Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <header className="dashboard-header">
          <h1>Welcome to Your Dashboard</h1>
          <p>Manage your account and orders here.</p>
        </header>
        <main className="dashboard-main">
          {/* Add your dashboard content here */}
        </main>
      </div>
    </div>




    </Layout>

  )
}

export default Dashbourd