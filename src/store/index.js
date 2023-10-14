// создаем папку стор в ней файл index.js в не гоимпортируем  конфигурстор из редакс тулкит
import { configureStore } from "@reduxjs/toolkit"
// импортируем из фильтерслайс фильтер
import filterReducer from "./slices/filterSlice"
import cartSlice from "./slices/cartSlice";
import pizzasReduser from "./slices/pizzasSlice";

// создаем пременную которая принимае финкцию которая включает с вебя объект редьюсер со стейтами каждого компонента приложения
export const store = configureStore({
    reducer:{
        filter: filterReducer,
        cart: cartSlice,
        pizzas: pizzasReduser
    }
})
// console.log(store);