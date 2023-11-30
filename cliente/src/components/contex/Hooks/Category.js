


import { useState, useEffect } from "react";
import axios from "axios";


export default function Category() {
  const [categories, setCategories] = useState([]);

  //get cat
  const getCategories = async () => {
    try {
        const { data } = await axios.get("http://localhost:9800/getcategory");
      setCategories(data?.category);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}