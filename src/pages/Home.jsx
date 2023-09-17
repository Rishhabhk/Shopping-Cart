import { useEffect, useState } from "react";
import Card from "../components/Card";
import './Home.css'

const API_URL = "https://fakestoreapi.com/products"

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState([])
  
  async function fetchData(){
    setLoading(true);
    try{
      const result = await fetch(API_URL);
      const response = await result.json();
      setdata(response)
    }
    catch(e){
      console.log("error fetching");
    }
    setLoading(false);
  }
  
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="home">
      {
        loading ?
         "loading":
         
          data.map((product)=>{
            return <Card key={product.id} product={product}/>
          })
         
      }
    </div>
  )
}

export default Home