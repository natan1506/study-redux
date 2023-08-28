import { configureStore, createSlice } from '@reduxjs/toolkit'

import rootReducer from './modules/rootReducer'

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer café', 'Estudar'],

  reducers: {}
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  }
})
