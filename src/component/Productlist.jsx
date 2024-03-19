import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getproducts } from '../redux/action';


function Productlist() {
    /*const [products,setproducts]=useState([])*/
    const dispatch=useDispatch()
    useEffect(()=>{
        /* axios.get("https://fakestoreapi.com/products")
        // .then((response)=>setproducts(response.data))
        // .catch(()=>alert("désole"))
       // console.log(response); */

       dispatch(getproducts()) 
    },[])
    const products=useSelector(state=>state.products)
    console.log(products)
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"50px",justifyContent:"center"}}>
    {
     products.map((e)=>
      <div>     
        <Card style={{ width: '18rem' ,height:"45rem"}}>
     <Card.Img variant="top" src={e.image} style={{height:"300px"}} />
     <Card.Body>

       <Card.Title style={{fontSize:"1rem"}} >{e.title}</Card.Title>
<Card.Text>{e.category}</Card.Text>
<Card.Title>{e.price}</Card.Title>
       <Card.Text style={{height:"100px",overflowY:"auto"}}>
         {e.description}
          </Card.Text>
          <Link to={`/product/${e.id}`}>
       <Button variant="primary">Go to details</Button>
       </Link>
     </Card.Body>
     
   </Card>
   </div>
   )
  

    }

    </div>
  )
}

export default Productlist