import React, { useEffect,useState } from 'react'

import{Route,Link,Routes,useNavigate,useLocation, useRoutes}from 'react-router-dom'

// import { logDOM } from '@testing-library/react'

import useRoutesWraper from '../hooks/useRoutesWraper'
import Layout from './Layout'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'

// console.log(pizzas);

function App() {
  const [pizzas,setPizzas] = useState([])
  const[loading,setLoading]= useState(true)
  useEffect(()=>{fetch('https://64d8f8605f9bf5b879cec21b.mockapi.io/items')
  .then(resp => resp.json())
  .then(data=>setPizzas(data))
  .finally(()=>setLoading(false))
  .catch(err=>{alert(`ошибка запраса к серверу:${err.message}`);})},[])
  
  
  const routes  = useRoutesWraper()
 

  return (
    // <Layout>
      //  {/* {routes}  */}
    // </Layout>
  
    <>
       
       <Routes>
        <Route path='/' element={<Layout/>}>
      <Route index element={<Home pizzas={pizzas} loading={loading}/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='about' element="About"/>
      <Route path='*' element="NOT FOUND"/>
      </Route>
      </Routes> 
      </>

  
 
  )
}

export default App





