import React,{ useContext, useEffect,useState} from 'react'
import { AppContext } from './App';

import {useSelector,useDispatch} from 'react-redux'
import { setCategory } from '../store/slices/filterSlice';


function Categories() {
    const categories = ['Все','Мясные','Вегетерианские','Гриль','Острые','Закрытые'];
 const activeCategory = useSelector((state)=>state.filter.category);
 const dispatch = useDispatch()

  return (
    <div className="categories">
    <ul>
        {categories.map((category,ind)=>(
            <li onClick={()=> dispatch(setCategory(ind))} key={ind} className={ind== activeCategory?'active':''}>{category}</li>
        ))}
      {/* <li className="active">Все</li>
      <li>Мясные</li>
      <li>Вегетарианская</li>
      <li>Гриль</li>
      <li>Острые</li>
      <li>Закрытые</li> */}
    </ul>
  </div>
  )
}

export default Categories