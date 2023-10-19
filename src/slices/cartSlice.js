import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    items:[],
    totalPrice: 0

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addItem(state, action) {
        //     state.items.push(action.payload)
        //     state.totalPrice = state.items.reduce((summ, obj)=>{
        //         return summ + obj.price
        //     }, 0)
        // },
        addItem(state, action) {
            const findItem = state.items.find(obj=>obj.id === action.payload.id)

            if(findItem){
                findItem.count ++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }

            state.totalPrice = state.items.reduce((sum, obj)=>{
                return sum + obj.price*obj.count
            }, 0)
        },
        removeItem(state, action) {
            const findItem = state.items.find(obj=>obj.id === action.payload)
            findItem.count --
            if(findItem.count === 0){
                console.log('here')
                state.items = state.items.filter(obj=> obj.id !== action.payload)
            }
            state.totalPrice = state.items.reduce((sum, obj)=>{
                return sum + obj.price*obj.count
            }, 0)
        },

        clearItem(state, action){
            state.items = state.items.filter(obj=> obj.id !== action.payload)
            state.totalPrice = state.items.reduce((sum, obj)=>{
                return sum + obj.price*obj.count
            }, 0)
        },
        clearItems(state, action) {
            state.items = []
            state.totalPrice = 0
        },

    }
})

export const {addItem, clearItems, clearItem, removeItem} = cartSlice.actions
export default cartSlice.reducer

