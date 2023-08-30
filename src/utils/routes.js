import Home from "../Pages/Home"
import Cart from "../Pages/Cart"
import NotFound from "../Pages/NotFound"
import { HOME_ROUTE,CART_ROUTE } from "./patches"
export const routes = 
[

    // {
    //     path:'/',
    //     children:[
    //        {
    //   path:HOME_ROUTE,
    //   element:<Home pizzas={[1,2,3]}/>
    // },
    // {
    //   path:CART_ROUTE,
    //   element:<Cart/>
    // },
    // {
    //     path:'*',
    //     element:<NotFound/>
    //   }, 
    //     ]
    //   },

    {
      path:HOME_ROUTE,
      element:<Home pizzas={[1,2,3]}/>
    },
    {
      path:CART_ROUTE,
      element:<Cart/>
    },
    {
        path:'*',
        element:<NotFound/>
      },
  ]