import { ADDTOCART, DELETECART, GETONEPRODUCT, GETPRODUCTS } from "./actionType"

const initialState = {
    cart:[],
    products:[],
    product:{}
}

export const cartreducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case ADDTOCART:
   
    const newcart=JSON.parse(localStorage.getItem("newcart"))
   if (!newcart){
    localStorage.setItem("newcart",JSON.stringify([]))
   }
    const x=newcart.find(e=>e.product.id===payload.product.id)
    if (x){
      localStorage.setItem("newcart", JSON.stringify(newcart.map(e=> e.product.id===payload.product.id ?{...e,quantity:e.quantity+payload.quantity } : e)))
        return { ...state, cart:state.cart.map(e=> e.product.id===payload.product.id ?{...e,quantity:e.quantity+payload.quantity } : e) }
    }
    else {
      localStorage.setItem("newcart", JSON.stringify([...newcart,payload] ))
        return { ...state, cart:[...state.cart,payload] }
    }
    
case DELETECART:
  const newcarte=JSON.parse(localStorage.getItem("newcart"))
   if (!newcarte){
    localStorage.setItem("newcart",JSON.stringify([]))
   }
  localStorage.setItem("newcart",JSON.stringify(newcarte.filter(e=>e.product.id!==payload)))
  return {

    ...state,cart:state.cart.filter(e=>e.product.id!==payload)
  }
  case GETPRODUCTS:
    return{
      ...state,products:payload
    }
    case GETONEPRODUCT:
return {
  ...state,product:payload
}
  default:
    return state
  }
}


