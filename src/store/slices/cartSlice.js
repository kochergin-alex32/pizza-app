import { createSlice } from "@reduxjs/toolkit";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";

const initialState= {
    items:[{id : 1, qty : 3}],
    total:0,
    count:0
}
const cartSlice= createSlice(
    {
        name:'cart',
        initialState,
        reducers:{
            addItem (state,action){
               const id = action.payload;
               const ind = state.items.findIndex(item => item.id == id)
               if (ind == -1){
               
                const item = {id, qty:1}
                state.items.push(item);
               } else{
                state.items[ind].qty += 1;
               }

            //    суммируем количество всех пицц
           
            state.count = state.items.reduce((count, item) => count + item.qty, 0);
        
        
               
            },
            deleteItem(state,action){

            }
        }
    }
)
export const {addItem, deleteItem} = cartSlice.actions;
export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";


// //Получили pizzas из pizzasSlice
// const initialState = {
//   items: [{ id: 1, qty: 3 }], // [{id:1,c:3},{id:1,c:3},{id:1,c:3}]
//   total: 0,
//   count: 0
// }


// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItem(state, action) {
//       const id = action.payload;
//       const ind = state.items.findIndex(item => item.id == id);
//       if (ind == -1) {
//         const item = { id, qty: 1 };
//         state.items.push(item);
//       } else {
//         state.items[ind].qty += 1;
//       }

//       //как прочитать state здесь
//       //как получить state из другого слайса
//     //   state.count = state.items.reduce((count, item) => count + item.qty, 0)
//       // state.total = 
//     },
//     deleteItem(state, action) {

//     }
//   }
// })

// export const { addItem, deleteItem } = cartSlice.actions;
// export default cartSlice.reducer;


