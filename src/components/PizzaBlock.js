import React,{useMemo, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';



function PizzaBlock({id, imageUrl,title,types,sizes,price,category,rating}) {
  const cartItems = useSelector(state=>state.cart.items);
  const dispatch = useDispatch()
  
  
  const[activeSize, setActiveSize] = useState(0);
  const[activeType, setActiveType] = useState(0);
  
  const item  = {id, imageUrl,title,price,activeSize,activeType}
  
  // let qty;
  const [ind,qty] = useMemo(()=>{
   let qty=0
    const ind = cartItems.findIndex(item => item.id == id);
    console.log('memo');
    if (ind != -1){
     
      qty = cartItems[ind].totalQty;
      console.log('qty');
    }
    return [ind,qty];
  },[id,cartItems])
    
     
  return (
    <div className="pizza-block">
    <img
      className="pizza-block__image"
      src={imageUrl}
      alt="Pizza"
    />
    <h4 className="pizza-block__title">{title}</h4>
    <div className="pizza-block__selector">
      <ul>
        {
            types.map((type)=>(

                (types.length>1)
                ?

                
                <li onClick={()=>setActiveType(type)} key={type} className={ type == activeType?'active':''}>
                    {(type == 0)?'тонкое':'традционное'}
                </li>
                
                :
                
                <li key={type} className="active">
                     {(type == 0)?'тонкое':'традционное'}
                 </li>
              
            ))

          
        }
       
      </ul>
      <ul>
        {
            sizes.map((size,ind)=>(
                
                <li onClick={()=>setActiveSize(ind)} key={size} className={ind==activeSize? 'active':''}>{size} см.</li>

            ))
        }
        
      </ul>
    </div>
    <div className="pizza-block__bottom">
      <div className="pizza-block__price">от {price} ₽</div>
      <div className="button button--outline button--add"  onClick={()=>dispatch(addItem(item))}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
            fill="white"
          />
        </svg>
        <span>Добавить</span>
        <i>
          {qty}
        </i>
      </div>
    </div>
  </div> 
  )
}

export default PizzaBlock