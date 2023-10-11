import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    activeCategory : 0,
    sort: {
        name: 'популярности',
        sortValue: 'rating'
    }
}

export const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers: {
        changeCategory(state, action){state.activeCategory = action.payload},
        changeSort: (state, action) => {
            state.sort = action.payload}
    }
})

export  const {changeCategory, changeSort} = filterSlice.actions
export default filterSlice.reducer

