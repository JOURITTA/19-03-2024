import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { add, getoneproduct } from "../redux/action";

function Productdetaille() {
  
  const [quantity,setQuantity]=useState(1)
  const dispatch=useDispatch()
  // console.log(useParams());
  const { id } = useParams();
  //const [product, setproduct] = useState({});

  useEffect(() => {
   /* axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((res) => setproduct(res.data))
      .catch((err) => console.log(err));*/
      dispatch(getoneproduct(id))
  }, []);
  const product = useSelector(state=>state.product)
  return (
    <div style={{height:"100vh"}} >
      <img src={product.image} style={{ width: "150px", height: "100px" }} />
      <Button onClick={() => setQuantity(quantity+1)}> +</Button>
      <span >{quantity}</span>
      <Button onClick={() => quantity>1 ? setQuantity(quantity-1) : quantity}>-</Button>
      <Button onClick={()=>dispatch(add({product,quantity}))}>ADD TO CART</Button>
    </div>
  );
}

export default Productdetaille;
