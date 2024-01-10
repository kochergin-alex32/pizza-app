import React, { createContext, useEffect,Suspense } from 'react'
// import { Suspense } from 'react'
import{Route,Link,Routes,useNavigate,useLocation, useRoutes}from 'react-router-dom'
import useRoutesWraper from '../hooks/useRoutesWraper'
import Layout from './Layout'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import NotFound from '../Pages/NotFound'
// импортируем для использования редакса вот этих двахука
import {useSelector,useDispatch} from 'react-redux'
import{fetchPizzas, setPizzas} from '../store/slices/pizzasSlice'
import Pizza from '../Pages/Pizza'
import Loader from './Loader'
import { useAppSelector,useAppDispatch } from '../hooks/redux'





//  export const AppContext = createContext()

function App({}) { 
// создаем терперь юзселектор и записываем в него стейт фильтер
  const activeCategory = useAppSelector((state)=>state.filter.category)

 
 
  const pizzas = useAppSelector(state=>state.pizzas.items);
  const search = useAppSelector(state=>state.filter.search);
  const dispatch = useAppDispatch();
 
  const{type,isUp}=useAppSelector(state=>state.filter.sort)
  
  // const[data,setData]= useState([]);



 useEffect(()=>{

 dispatch(fetchPizzas());
  
},[activeCategory, type,isUp, search])

 
  return (
   
  
    <>
    
       
         
          <Suspense fallback={<Loader/>}>
       <Routes>
        <Route path='/' element={<Layout/>}>
      <Route index element={<Home />}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='about' element="About"/>
      <Route path='pizzas/:id' element={<Pizza/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Route>
      </Routes> 
      </Suspense>
      </>

  
 
  )
}

export default App





// Promise.all([
  //   fetch(`https://64d8ae0a5f9bf5b879ce72a8.mockapi.io/items?category=${category}&sortBy=${sort[type]}&order=${order}`),
  //   fetch(`https://64d8ae0a5f9bf5b879ce72a8.mockapi.io/items?search=${search}`),
  // ]).then(([sorted, searched]) => { 
  //   return Promise.all([sorted.json(),searched.json()])
  // }).then(([sorted,searched])=> {
  //   // console.log(sorted,searched);
  //   const newData = sorted.filter(sortedItem => searched.some(searchedItem => sortedItem.id == searchedItem.id));
  //   dispatch(setPizzas(newData))
  // })
// .finally(()=>setLoading(false))
// .catch(err=>{alert(`ошибка запраса к серверу:${err.message}`);})