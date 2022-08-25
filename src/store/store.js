import { configureStore } from "@reduxjs/toolkit";
import AppState from "./AppState";
import AuthState from "./AuthState";

const reducer = {
    AppState,
    AuthState,
}

const store = configureStore({
    reducer
})

export default store;