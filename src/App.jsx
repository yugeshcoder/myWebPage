import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Products from './component/Products'
import {Routes, Route} from 'react-router-dom'
import AboutUs from './component/AboutUs'
import ContactUs from './component/ContactUs'

function App() {
  const[currentCategory, setCurrentCategory] = useState("plain");
  return(
    <>
      <Header setCurrentCategory = {setCurrentCategory}/>
      <Routes>
        <Route path='/products' element ={<Products currentCategory ={ currentCategory} setCurrentCategory = {setCurrentCategory}/>}></Route>
        <Route path = '/about' element = {<AboutUs/>}></Route>
        <Route path='/contact' element = {<ContactUs/>}></Route>
      </Routes>
    </>
  )
}

export default App