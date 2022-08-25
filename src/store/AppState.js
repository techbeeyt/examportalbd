import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: 'light',
}

const appStateSlice = createSlice({
    name: 'appstate',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = (state.theme === 'light') ? state.theme = 'dark' : state.theme = 'light';
            localStorage.setItem("theme", state.theme);
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
            localStorage.setItem("theme", state.theme);
        }
    }
});

export const { toggleTheme, setTheme } = appStateSlice.actions;
export default appStateSlice.reducer;