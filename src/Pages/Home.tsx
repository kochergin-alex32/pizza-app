import React,{memo}from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/Skeleton'
// import { AppContext } from '../components/App';
import { useAppSelector, useAppDispatch } from '../hooks/redux'


const Home = memo(function () {
  const pizzas = useAppSelector((state)=>state.pizzas.items);
  const status = useAppSelector(state=> state.pizzas.status);
  // const error = useAppSelector(state=> state.pizzas.error)
  // console.log(pizzas);
  // закоментил сли что раскоментиьть
  // const dispatch = useAppDispatch();
  // const {loading}= useContext(AppContext);
//  закоментил стейт если что раскоментить
  // const [isClick, seyIsClick]= useState(false)
  
  
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
     {/* ниже коментарий чтобы игнорировать непонятную ошибку TS */}
    {/* @ts-ignore */}
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