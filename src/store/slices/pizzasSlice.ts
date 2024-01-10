import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pizza } from "../../types/pizza";
import { useSelector } from "react-redux";
import { Root } from "react-dom/client";
import { RootState } from "..";
type Status = "loading"|"resolved"|"rejected";
type PizzasState ={
    items:Pizza[];
    status: Status | null;
    error: string | null;
}
const initialState: PizzasState ={
    items:[],
    status: null,
    error: null,
};
 export const fetchPizzas = createAsyncThunk<Pizza[], undefined,{rejectValue:{error: PizzasState['error']}; state:RootState;}>('pizzas/fetchPizzas',async(_,{rejectWithValue,getState})=>{
    const activeCategory = getState().filter.category; 
    const {isUp, type} = getState().filter.sort;
    const search = getState().filter.search;
    const category = activeCategory == 0? '' : activeCategory;
    const sort = ['rating','price','title'];
    const order = isUp? 'asc':'desc';
    
    try {
        

  const resp = Promise.all([
    fetch(`https://64d8ae0a5f9bf5b879ce72a8.mockapi.io/items?category=${category}&sortBy=${sort[type]}&order=${order}`),
    fetch(`https://64d8ae0a5f9bf5b879ce72a8.mockapi.io/items?search=${search}`),
  ]).then(([sorted, searched]) => { 
    return Promise.all([sorted.json(),searched.json()])
  }).then(([sorted,searched]:[Pizza[],Pizza[]])=> {
    const newData = sorted.filter(sortedItem => searched.some(searchedItem => sortedItem.id == searchedItem.id));
 
    return newData;

   
  })


const data = await resp;

return data;
    } 
    catch (error: any) {
      
        return rejectWithValue(error.message)
        
    }

    
})
const pizzasSlice =  createSlice({
    name:"pizzas",
    initialState,
    reducers:{
       //получчаем пиццы 
        setPizzas(state, action:PayloadAction<Pizza[]>){
            state.items = action.payload

        },
       
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPizzas.pending,(state)=>{
            state.status = 'loading';
            state.error = null;
        })
        .addCase(fetchPizzas.fulfilled, (state, action:PayloadAction<Pizza[]>)=>{
            state.status = 'resolved';
            state.items = action.payload;
            console.log('sucsees')})
        .addCase(fetchPizzas.rejected,(state,action:PayloadAction<any>)=>{
            state.status = 'rejected';
            state.error = action.payload;
            console.log(action.payload);
        })
    }
    
})
export const {setPizzas} = pizzasSlice.actions;
export default pizzasSlice.reducer; 


