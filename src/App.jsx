

import { Route, Routes } from 'react-router-dom';
import './App.css'
import Productlist from './component/Productlist'
import 'bootstrap/dist/css/bootstrap.min.css';
import Productdetaille from './component/Productdetaille';
import Header from './component/Header';
import Cart from './component/Cart';


function App() {
  
  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={ <Productlist/>}/>
      <Route path='/product/:id' element={ <Productdetaille/>}/>
      <Route path='/cart' element={ <Cart/>}/>
     </Routes>
    </>
  )
}

export default App
