import { configureStore } from '@reduxjs/toolkit'
import stateReducer from '@/redux/slice/stateSlice'
import pageTabReducer from '@/redux/slice/pageTabSlice'

const store = configureStore({
    reducer: { 
        state: stateReducer,
        pageTab: pageTabReducer,
     }
})

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store