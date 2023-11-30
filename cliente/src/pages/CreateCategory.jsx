import React from 'react'
import { useEffect , useState } from 'react'
import axios from "axios"
import {toast} from "react-toastify"

import { Modal } from 'antd';
import Layout from "../components/Layout"
import Adminlayout from '../components/Adminlayout'
import CategoryForm from '../components/CategoryForm'



const CreateCategory = () => {

 

  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [categories, setCategories] = useState([]);
  
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  console.log(selected)


  // intaaas waa ju laabanysaaa ma dhamayn waxa ka khaladam slugify

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:9800/updated/${selected._id}`,
        { name: updatedName }
      
   
      );
      console.log(data)
      if (data.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error("Somtihing went wrong");
    }
  };

  

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get( "http://localhost:9800/getcategory");
      if (data?.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error('some thing mething ....')
    //  toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // category delted
  
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:9800/dlletd/${pId}`
        
      );
      console.log(data)
    
      if (data.success) {
        toast.success(`category is deleted`);

        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:9800/createcategory", {
        name,
      });
      console.log(data)
      console.log(data.category
        .name
        )
      if (data?.success) {
        toast.success(`${data.category
          .name
        } is created`)
       
      
      } else {
       
      }
    } catch (error) {
      console.log(error);
      toast.error('somem thing messing')

    }
  };

  // gel all category 


 
  return (
    <Layout title={"Dashboard - Create Category"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <Adminlayout />
          </div>
          <div className="col-md-9">
            <h1>Manage Category</h1>
            <div className="p-3 w-50">
            
               
         <CategoryForm  handleSubmit={handleSubmit} value={name} setValue ={setName} />
            </div>
            <div className="w-75">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((c) => (
                    <>
                      <tr>
                        <td key={c._id}>{c.name}</td>

                        <td>
                          <button
                            className="btn btn-primary ms-2"
                            onClick={() => {
                              setVisible(true);
                              setUpdatedName(c.name);
                              setSelected(c);
                              
                            }}
                          
                          >
                            Edit
                          </button>


                          <button
                            className="btn btn-danger ms-2"
                            onClick={()=>  handleDelete(c._id)}
                            
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
        
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            >
              <CategoryForm  
               value={updatedName}
                setValue={setUpdatedName}
                handleSubmit={handleUpdate}  />
              {visible}
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateCategory