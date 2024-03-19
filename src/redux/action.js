import axios from "axios"
import { ADDTOCART, DELETECART, GETONEPRODUCT, GETPRODUCTS } from "./actionType"

export const add = (data) =>{
  return   {
    type:ADDTOCART,
    payload:data
   } 
}
export const del = (id) =>{
  return   {
    type:DELETECART,
    payload:id
   } 
}
export const getproducts = ()=> async(dispatch) =>{
  try {
    const response = await axios.get("https://fakestoreapi.com/products")
    console.log(response)
    dispatch({
      type:GETPRODUCTS,
      payload:response.data
    }    ) 
  } catch (error) {
    console.log(error)
  }
}

export const getoneproduct = (id)=> async(dispatch) =>{
  try {
    const response = await axios.get("https://fakestoreapi.com/products/" + id)
    
    dispatch({
      type:GETONEPRODUCT,
      payload:response.data
    }    ) 
  } catch (error) {
    console.log(error)
  }
}