
import React from 'react'
import { NavLink, Link } from "react-router-dom";

const Adminlayout = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>Admin Panel</h4>
          <NavLink
            to= '/dashboard/admin/create-category'
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
        to= '/dashboard/admin/create-producte'
            className="list-group-item list-group-item-action"
          >
         Create Product
          </NavLink>
          <NavLink
            to='/dashboard/admin/prudcts'
            className="list-group-item list-group-item-action"
          >
          Product
          </NavLink>
        
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Adminlayout