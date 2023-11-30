import React from 'react'
import Header from './Header'
import { Helmet } from 'react-helmet';
import Footer from './Footer';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Layout = ({children , title , description , keywords , author}) => {
  return (
    <div>
        <Helmet>
        <meta charSet="UTF-8" />
        <div>
      <div>
  <meta name="description" content= {description} />
  <meta name="keywords" content= {keywords} />
  <meta name="author" content= {author}/>

</div>

        </div>

        <title>{title}</title>
</Helmet>

 
        <Header/>
        <ToastContainer/>
        <main style={{minHeight:'80vh'}}>    {children}  </main>
      
        <Footer/>
    
     
    </div>
  )
}

export default Layout