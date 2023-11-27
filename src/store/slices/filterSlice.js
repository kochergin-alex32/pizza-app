// создаем слайсы подобные этому с логикой стейтов и импортируем их в индкс стор
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    category:0,
    sort:{type:0,isUp:true},
    search:''

}
// импортируем сюда createSlice и описываем его
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    // редьюсерс это логика с каким либо действием после выполнения которого он перезаписывает стейт
    reducers:{
        setCategory(state, action){
            state.category=action.payload;
        },
        setSort(state,action){
            state.sort = action.payload
        },
        setSearch(state, action){
            state.search = action.payload;
        }
    }
})
// экспортируем это двумя видами для дальнейшего использования
export const {setCategory, setSort, setSearch} = filterSlice.actions;
export default filterSlice.reducer