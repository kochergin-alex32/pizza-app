import React, {memo} from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useParams, Link } from 'react-router-dom';
import PizzaBlock from '../components/PizzaBlock'
const Pizza = memo(function () {
  const pizzas = useSelector((state)=>state.pizzas.items);
  console.log(pizzas);
  // первый способ
  const {id} = useParams();
// второй способ
  // const location = useLocation();
  // const arr = location.pathname.split('/');
  // const id = arr[arr.length-1];

  const pizza = pizzas.find(item => item.id==id);

 console.log(pizza);
return (
  pizzas.length >0 &&
  <>
  <PizzaBlock {... pizza} isTitleClikable={false}/>
  <Link to='/'
              className='button button--outline button--add go-back-btn'>
              <svg
                width='8'
                height='14'
                viewBox='0 0 8 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M7 13L1 6.93015L6.86175 1'
                  stroke='#D3D3D3'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <span>Вернуться назад</span>
            </Link>
            </>
)
})

export default Pizza