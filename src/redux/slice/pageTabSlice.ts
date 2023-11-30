import { createSlice } from "@reduxjs/toolkit";

interface PageTabState {
    keepElement: Record<string,any>,
    keepalive: any[],
}

const initialState: PageTabState = {
    keepElement: {},
    keepalive: [],
}

export const pageTabSlice = createSlice({
    name:'pageTab',
    initialState,
    reducers: {
        changeKeepElement: (state, action) => {
            let pathname = action.payload.pathname;
            let element = action.payload.element;
            state.keepElement[pathname] = element
        },
        changeKeepalive: (state) => {
            state.keepalive = state.keepalive
        }
    },
})

export const { changeKeepElement, changeKeepalive } = pageTabSlice.actions

export default pageTabSlice.reducer