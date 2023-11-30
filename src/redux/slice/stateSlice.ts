import { createSlice } from "@reduxjs/toolkit";

interface StateState {
    WebTitle: string,
    WebTitleScrollStatus: boolean,
    ss: {},
}

const initialState: StateState = {
    WebTitle: '这是个伟大的项目',
    WebTitleScrollStatus: false,
    ss:{
        aa:1,
        dd:2,
    }
}

export const stateSlice = createSlice({
    name:'state',
    initialState,
    reducers: {
        changeWebTitle: (state, action) => {
            state.WebTitle = action.payload
        },
        changeWebTitleScrollStatus: (state) => {
            state.WebTitleScrollStatus = !state.WebTitleScrollStatus
        }
    },
})

export const { changeWebTitle, changeWebTitleScrollStatus } = stateSlice.actions

export default stateSlice.reducer