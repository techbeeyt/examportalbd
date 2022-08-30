import { configureStore } from "@reduxjs/toolkit";
import AppState from "./AppState";
import AuthState from "./AuthState";
import LoadData from './LoadDataFromServer';
import FormState from './FormState';

const reducer = {
    AppState,
    AuthState,
    LoadData,
    FormState
}

const store = configureStore({
    reducer
})

export default store;