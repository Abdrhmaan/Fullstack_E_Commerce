import React from 'react'
import Layout from '../components/Layout'


const NotFound = props => {
  return (
    <Layout title={'NOT FOUND'}>
   <div className="container text-center mt-5">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for doesn't exist.</p>
  </div>
    </Layout>
 
  )
}


export default NotFound