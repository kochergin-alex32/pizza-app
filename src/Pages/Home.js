import React,{useState,useEffect,useCallback, useContext}from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/Skeleton'
import { AppContext } from '../components/App'


function Home() {
  const {pizzas,setPizzas,loading,activeCategory,activeSort}= useContext(AppContext)
 
  
  
  
  return (
    <>
   
    <div className="content__top">
    <Categories  />
     <Sort />
   </div>
   {/* { loading==false ? (pizzas.length>0 ?<h2 className="content__title">Все пиццы</h2>:<h2 className="content__title">не найдено 😢</h2>):null} */}
   { loading==false && (pizzas.length>0 ?<h2 className="content__title">Все пиццы</h2>:<h2 className="content__title">не найдено 😢</h2>)}
   
   <div className="content__items">
     {!loading?
      pizzas.map(pizza =>(
       <PizzaBlock key={pizza.id} {...pizza}/>
     ))
    //  тоже нужная логика
  //    pizzas.filter((item)=>{
  //     if(active===0){
  //       return item
  //     }
  //     return item.category == active
  //    }).map(pizza =>(
  //    <PizzaBlock key={pizza.id} {...pizza}/>
  //  ))
     :<div>
       {
         [... new Array(10)].map((_,ind)=> <Skeleton key={ind}/>)

       }

     
     </div>
       }
   </div>
   </>
  )
}

export default Home

// pizzas={pizzasTorender} loading={loading} setPizzas={(data)=>pizzasTorender=data} setLoading={setLoading} active={active} setActive={(ind)=>setActive(ind)