import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Products from './component/Products'
import {Routes, Route,Navigate} from 'react-router-dom'
import AboutUs from './component/AboutUs'
import ContactUs from './component/ContactUs'
import TableHeader from './feature/TableHeader'

function App() {
  const[currentCategory, setCurrentCategory] = useState("plain");
  return(
    <>
      <Header setCurrentCategory = {setCurrentCategory}/>
      <Routes>
        <Route path='/products' element ={<Products currentCategory ={ currentCategory} setCurrentCategory = {setCurrentCategory}/>}></Route>
        <Route path='/' element={<Products currentCategory ={ currentCategory} setCurrentCategory = {setCurrentCategory}/>}></Route>
        <Route path='*' element={<Products currentCategory ={ currentCategory} setCurrentCategory = {setCurrentCategory}/>}></Route>
        <Route path = '/about' element = {<AboutUs/>}></Route>
        <Route path='/contact' element = {<ContactUs/>}></Route>
        <Route path='/calc' element={<TableHeader/>}></Route>
      </Routes>
    </>
  )
}

export default App
