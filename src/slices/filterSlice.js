import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    activeCategory: 0,
    sort: {
        name: 'популярности',
        sortValue: 'rating'
    },
    currentPage: 1

}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeCategory(state, action) {
            state.activeCategory = action.payload
        },
        changeSort: (state, action) => {
            state.sort = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    }
})

export const {changeCategory, changeSort, setCurrentPage} = filterSlice.actions
export default filterSlice.reducer

