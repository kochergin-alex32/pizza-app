import React from 'react'
import { useState } from 'react';

function Categories() {
    const categories = ['Все','Мясные','Вегетерианские','Гриль','Острые','Закрытые'];
    const [activeCategory, setActiveCategory]= useState(0)
  return (
    <div className="categories">
    <ul>
        {categories.map((category,ind)=>(
            <li onClick={()=> setActiveCategory(ind)} key={ind} className={ind== activeCategory?'active':''}>{category}</li>
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