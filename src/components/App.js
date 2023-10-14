import React, { createContext, useEffect,useState } from 'react'
import{Route,Link,Routes,useNavigate,useLocation, useRoutes}from 'react-router-dom'
import useRoutesWraper from '../hooks/useRoutesWraper'
import Layout from './Layout'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import NotFound from '../Pages/NotFound'
// импортируем для использования редакса вот этих двахука
import {useSelector,useDispatch} from 'react-redux'
import{setPizzas} from '../store/slices/pizzasSlice'


 export const AppContext = createContext()

function App({}) { 
// создаем терперь юзселектор и записываем в него стейт фильтер
const activeCategory = useSelector((state)=>state.filter.category)

 
const[loading,setLoading]= useState(true)
const pizzas = useSelector(state=>state.pizzas.items)
const dispatch = useDispatch();
// const [pizzas,setPizzas] = useState([])
  // const[activeCategory, setActiveCategory]=useState(0)
  // const [activeSort,setActiveSort]= useState({type:0,isUp:true});
  const [ search, setSearch]= useState('')
  const{type,isUp}=useSelector(state=>state.filter.sort)
  const store = {pizzas, setPizzas,loading,setLoading,setSearch}

 

 useEffect(()=>{
  const category = activeCategory == 0? '' : activeCategory;
  const sort = ['rating','price','title'];
  const order = isUp? 'asc':'desc';
 


  Promise.all([
    fetch(`https://64d8ae0a5f9bf5b879ce72a8.mockapi.io/items?category=${category}&sortBy=${sort[type]}&order=${order}`),
    fetch(`https://64d8ae0a5f9bf5b879ce72a8.mockapi.io/items?search=${search}`),
  ]).then(([sorted, searched]) => { 
    return Promise.all([sorted.json(),searched.json()])
  }).then(([sorted,searched])=> {
    // console.log(sorted,searched);
    const newData = sorted.filter(sortedItem => searched.some(searchedItem => sortedItem.id == searchedItem.id));
    dispatch(setPizzas(newData))
  })


//   fetch(`https://64d8f8605f9bf5b879cec21b.mockapi.io/items?category=${category}&sortBy=${sort[activeSort.type]}&order=${order}&search=${search}`)
// .then(resp => resp.json())
// .then(data=>setPizzas(data))
.finally(()=>setLoading(false))
.catch(err=>{alert(`ошибка запраса к серверу:${err.message}`);})},[activeCategory, type,isUp, search])
  // const routes  = useRoutesWraper()
 

  return (
    // <Layout>
      //  {/* {routes}  */}
    // </Layout>
  
    <>
    
       
        <AppContext.Provider value={store}>
       <Routes>
        <Route path='/' element={<Layout/>}>
      <Route index element={<Home />}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='about' element="About"/>
      <Route path='*' element={<NotFound/>}/>
      </Route>
      </Routes> 
      </AppContext.Provider>
      </>

  
 
  )
}

export default App





