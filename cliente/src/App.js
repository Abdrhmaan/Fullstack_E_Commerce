import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { Route,Routes } from 'react-router-dom';
import Hom from './pages/Hom';
import About from './pages/About';
import Contacte from './pages/Contacte';
import Policy from './pages/Policy';
import NotFound from './pages/NotFound';
import Signup from './pages/Authentication/Signup';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Authentication/Login';
import Dashbourd from './pages/user/Dashbourd';
import Protect from './components/routers/Protect';
import Forgetpssword from './pages/Forgetpssword';
import AdminRoute from './components/routers/AdminRoute';
import AdminDashbourd from './pages/admin/AdminDashbourd';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import CreateCategory from './pages/CreateCategory';
import Createproducte from './pages/Createproducte';
import Producte from './pages/Producte';
import Update from './pages/admin/Update';
import SearchOutbot from './pages/SearchOutbot';
import Productedetails from './pages/Productedetails';
import Category from './components/contex/Hooks/Category';
import Catergrs from './components/Catergrs';

import CategoryProducte from './pages/CategoryProducte';
import Cartpage from './components/Cartpage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/'  element={<Hom />}/>
        <Route path='/about'  element={<About />}/>
        <Route path='/contact'  element={<Contacte />}/>
        <Route path='/dashboard'  element={<Protect/>}>
        <Route path = "user" element={<Dashbourd />}/>
        <Route path='/dashboard/user/profile' element={<Profile/>} />

        </Route>

        <Route path='/dashboard' element={<AdminRoute/>}>
        <Route path = "admin" element={<AdminDashbourd />}/>
        <Route path='/dashboard/admin/create-category' element={<CreateCategory/>}/>
        <Route path= '/dashboard/admin/create-producte'  element={<Createproducte/>}/>
    
        <Route path='/dashboard/admin/prudcts' element={<Producte/>}/>
        <Route path='/dashboard/admin/updtedprudcts/:slug' element={<Update/>}/>
        </Route>
      
        <Route path='/policy'  element={<Policy />}/>

      
        <Route path='/category/:slug'element={<CategoryProducte/>} />
        
        

       
        <Route path='/dashboard/user/orders' element={<Orders/>} />
        <Route path='/carte' element={<Cartpage/>} />
        <Route path='/categories' element={<Catergrs/>} />
      
        <Route path='/search' element={<SearchOutbot/>} />
        <Route path='/forgetpssword'  element={<Forgetpssword />}/>
        <Route path='/detailsproducte/:slug'  element={<Productedetails />}/>
        <Route path='*'  element={<NotFound />}/>
        <Route path='/signup'  element={<Signup />}/>
        <Route path='/login'  element={<Login />}/>
      </Routes>
  

  
    </div>
  );
}

export default App;
