import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    // id, imageUrl,title,price,qty:3
    items:[],
    total:0,
    count:0
}


// [
//     {
//       "id": "1",
//       "title",
//       "imageUrl",
//       "price",
  
//       "detales": [
//         {
//           "type":"0",
//           "sizes": [{"size":"26","count":2},{"size":"30","count":1}]
//         },
//         {
//           "type":"1",
//           "sizes": [{"size":"26","count":3},{"size":"30","count":2}]
//         }
//       ]
//     },
//   ]


const cartSlice= createSlice(
    {
        name:'cart',
        initialState,
        reducers:{
            addItem(state, action) {
                const { id, imageUrl, title, price, activeSize, activeType } =
                  action.payload;
                const itemsInd = state.items.findIndex((item) => item.id == id);
          
                if (itemsInd == -1) {
                  const item = {
                    id,
                    imageUrl,
                    title,
                    price,
                    totalQty:1,
                    details: [
                      {
                        type: activeType,
                        sizes: [{ size: activeSize, qty: 1 }],
                      },
                    ],
                  };
                  state.items.push(item);
                  state.count = state.count+1;
                  state.total = state.total+ price;
                //   console.log(JSON.stringify(state.items));
                } else {
                  //Когда товар с таким ид уже есть, ищем где в details объект с таким же типом
                  const detailsTypeInd = state.items[itemsInd].details.findIndex(
                    (el) => el.type == activeType
                  );
                  //если нашли эл с таким типом
                  if (detailsTypeInd != -1) {
                    // В массиве details ищем в массиве sizes объект с таким же сайзом этого типа
                    const typeSizeInd = state.items[itemsInd].details[
                      detailsTypeInd
                    ].sizes.findIndex((el) => el.size == activeSize);
                    //Если нашли эл такого типа и с таким же сайз
                    if (typeSizeInd != -1) {
                      state.items[itemsInd].details[detailsTypeInd].sizes[typeSizeInd]
                        .qty++;
                        state.items[itemsInd].totalQty++;
                        state.count = state.count + 1;
                        state.total = state.total + price;
                    } else {
                      //Если нашли эл такого типа но сайза такого еще не было
                      const sizesItem = {
                        size: activeSize,
                        qty: 1,
                      };
                      //то в существующий тип доб в массив объект с новым сайзом в кол 1 штука
                      state.items[itemsInd].details[detailsTypeInd].sizes.push(sizesItem);
                      state.items[itemsInd].totalQty++;
                      state.count = state.count + 1;
                      state.total = state.total + price;
                    }
          
                    console.log(JSON.stringify(state.items));
                  } else {
                    //если не нашли эл с таким типом тогда доюавляем ее впервые такого типа
                    const detailsItem = {
                      type: activeType,
                      sizes: [
                        {
                          size: activeSize,
                          qty: 1,
                        },
                      ],
                    };
                    state.items[itemsInd].details.push(detailsItem);
                    state.items[itemsInd].totalQty++;
                    state.count = state.count + 1;
                    state.total = state.total + price;
                    // console.log(JSON.stringify(state.items));
                  }
                }
          
                //как прочитать state здесь
                // console.log(JSON.stringify(state.items));
                // state.count = state.items.reduce((count, item) => count + item.qty, 0);
                // state.total =
              },
            deleteItem(state,action){
              const { id, imageUrl, title, price, activeSize, activeType } =
                  action.payload;
                  state.items.forEach(item=>{
                    if(item.id==id){
                      item.details.forEach(detailsItem=>{
                        if(detailsItem.type==activeType){
                          detailsItem.sizes.forEach((sizesItem,ind)=>{
                            if(sizesItem.size == activeSize){
                              if(sizesItem.qty<=1){
                                detailsItem.sizes.splice(ind,1);
                              }else{
                                sizesItem.qty--;
                              }
                              item.totalQty--;
                              state.count--;
                              state.total= state.total-price
                              if(state.count==0)state.items=[];
                            }
                          })
                        }
                      })

                    }
                  })

            },
            // deletePizza(state,action){
            //   const ind = state.items.findIndex(item=>item.id == action.payload.id)
            //   state.items.splice(ind,1)
            // },
            clearItems(state){
              state.items=[];
              state.count=0;
              state.total = 0;
            }
        }
    }
)
export const {addItem, deleteItem,clearItems,deletePizza} = cartSlice.actions;
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


