import React,{memo,useState,useEffect,useCallback, useContext}from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/Skeleton'
import { AppContext } from '../components/App'
import { useDispatch, useSelector} from 'react-redux'


const Home = memo(function () {
  const pizzas = useSelector((state)=>state.pizzas.items);
  const status = useSelector(state=> state.pizzas.status);
  const error = useSelector(state=> state.pizzas.error)
  // console.log(pizzas);
  const dispatch = useDispatch();
  // const {loading}= useContext(AppContext);
 
  const [isClick, seyIsClick]= useState(false)
  
  
  return (
    <>

   {/* <button >isClick</button> */}


    <div className="content__top">
    <Categories  />
     <Sort />
   </div>
   {/* { loading==false ? (pizzas.length>0 ?<h2 className="content__title">Все пиццы</h2>:<h2 className="content__title">не найдено 😢</h2>):null} */}
   { status !== 'loading' && status !== 'rejected'  && (pizzas.length > 0 ?<h2 className="content__title">Все пиццы</h2>:<h2 className="content__title">не найдено 😢</h2>)}
   
   <div className="content__items">
     {status == 'resolved' && status !== 'rejected' ?(
      pizzas.map(pizza =>(
       <PizzaBlock key={pizza.id} {...pizza}/>)
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
     :( 
      status == 'loading' ?
     (<div>
       {
         [... new Array(10)].map((_,ind)=> <Skeleton key={ind}/>)

       }

     
     </div>)
     : 
     (<h2 className="content__title">ошибка запроса на срвер попробуйте позже 😢</h2>)
       )}
   </div>
   </>
  // <>
  //     <div className='content__top'>
  //       <Categories />
  //       <Sort />
  //     </div>
  //     {status == false &&
  //       (pizzas.length > 0 ? (
  //         <h2 className='content__title'>Все пиццы</h2>
  //       ) : (
  //         <h2 className='content__title'>Пиццы не найдены</h2>
  //       ))}
  //     <div className='content__items'>
  //       {!status ? (
  //         pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
  //       ) : (
  //         <div>
  //           {[...new Array(10)].map((_, ind) => (
  //             <Skeleton key={ind} />
  //           ))}
  //         </div>
  //       )}
  //     </div>
  //   </>
  )
})

export default Home

// pizzas={pizzasTorender} loading={loading} setPizzas={(data)=>pizzasTorender=data} setLoading={setLoading} active={active} setActive={(ind)=>setActive(ind)