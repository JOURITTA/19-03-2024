import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { del } from '../redux/action'

function Product({e, total, setTotal}) {
    const [count, setCount]=useState(e.quantity)
    const dispatch=useDispatch()
  return (
    <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
    <div className="mr-1">
      <img
        className="rounded"
        src={e.product?.image}
        width={70}
      />
    </div>
    <div className="d-flex flex-column align-items-center product-details">
      <span className="font-weight-bold">{e.product?.title}</span>
      <div className="d-flex flex-row product-desc">
        <div className="size mr-1">
          <span className="text-grey">Size:</span>
          <span className="font-weight-bold">&nbsp;M</span>
        </div>
        <div className="color">
          <span className="text-grey">Color:</span>
          <span className="font-weight-bold">&nbsp;Grey</span>
        </div>
      </div>
    </div>
    <div className="d-flex flex-row align-items-center qty">
      <i className="fa fa-minus text-danger" onClick={()=>{setCount(count-1)
    setTotal(total-e.product.price)
    }}/>
      <h5 className="text-grey mt-1 mr-1 ml-1">{count}</h5>
      <i className="fa fa-plus text-success" onClick={()=>{setCount(count+1)
    setTotal(total+e.product.price)
    }}/>
    </div>
    <div>
      <h5 className="text-grey">{e.product?.price}</h5>
    </div>
    <div className="d-flex align-items-center">
      <i style={{cursor:"pointer"}} className="fa fa-trash mb-1 text-danger" onClick={()=>dispatch(del(e.product.id))}/>
    </div>
  </div>
  )
}

export default Product