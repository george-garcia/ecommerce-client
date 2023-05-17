"use client";

import {configureStore} from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from "./index";

const store = configureStore({
    reducer: { cart: cartReducer },
});

export function Providers({ children } ) {
    return <Provider store={store}>{children}</Provider>;
}
