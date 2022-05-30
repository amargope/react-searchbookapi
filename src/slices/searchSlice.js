import { createSlice } from '@reduxjs/toolkit'
import { searchBooks } from "../thunks/searchBookApi"

const initialState = {
  items: [],
  selectedItem: []
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
   addSelect:(state,action)=>{
     state.selectedItem.push(action.payload)
   },

   clearSelect: (state) => {
    state.selectedItem.splice(0, state.selectedItems.length);
  }
 },
 extraReducers: (builder) => {
  builder.addCase(searchBooks.fulfilled, (state, action) => {
    state.items.push(...action.payload.items);
  });
}


})


  
export const { addSelect, clearSelect } = searchSlice.actions

export default searchSlice.reducer