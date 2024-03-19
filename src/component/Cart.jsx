import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'

function Cart() {
  const [total, setTotal]=useState(0)
  const [newcart, setNewcart]= useState([])
  const dispatch=useDispatch()
  useEffect(()=>{
    const x = JSON.parse(localStorage.getItem("newcart"))
    if(x){setNewcart(x)}
  }, [dispatch])
  useEffect(() => {
    
    setTotal(newcart.reduce((acc,e)=>acc+e.quantity*e.product.price, 0))
  }, [newcart])
  
  console.log(total)
  const cart=useSelector((state)=>state.cart)
  console.log(cart)
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-8">
            <div className="p-2">
              <h4>Shopping cart</h4>
              <span>
                total price:{total.toFixed(3)} 
              </span>
              <div className="d-flex flex-row align-items-center pull-right">
                <span className="mr-1">Sort by:</span>
                <span className="mr-1 font-weight-bold">Price</span>
                <i className="fa fa-angle-down" />
              </div>
            </div>
            {cart.map(e=>
            <Product e={e} total={total} setTotal={setTotal}/>
)}
            <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
              <input
                type="text"
                className="form-control border-0 gift-card"
                placeholder="discount code/gift card"
              />
              <button className="btn btn-outline-warning btn-sm ml-2" type="button">
                Apply
              </button>
            </div>
            <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
              <button
                className="btn btn-warning btn-block btn-lg ml-2 pay-button"
                type="button"
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart