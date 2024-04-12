import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Card from '../components/Card'
import { ColorRing } from 'react-loader-spinner'
const Product = () => {
  const[products,setProducts]=useState([])
  const[loading,setLoading]=useState(true)
const[limit,setLimit]=useState(12)
useEffect(()=>{
  const fetchProduct=async()=>{
try{
  const response= await axios.get(`http://fakestoreapi.com/products`)
  setProducts(response.data)
  setLoading(false)
}
catch(err){
console.log(err)
}
  }
  setTimeout(()=>{
    fetchProduct()
  
  },1000)
 
})

  return (
    <>
     <div className="container-fluid ">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {loading ? (
            <div style={{height:'50vh'}} className='d-flex justify-content-center align-item-center w-100'>
<ColorRing
 visible={true}
 height="80"
 width="80"
 ariaLabel="blocks-loading"
 wrapperStyle={{}}
 wrapperClass="blocks-wrapper"
 colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
            </div>
          ):
(
   
  products.slice(0,limit).map((product,i)=>(
<Card key={i} item={product}/>
  ))

)
  }
  <div className='my-2'>
    {
<button className='btn btn-warning'onClick={()=>setLimit(limit+4)}>Load More</button>

    }

  </div>

        </div>
        </div>
        </>
   
  )
}

export default Product