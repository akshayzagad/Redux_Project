import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk"; // Corrected import
import {composeWithDevTools} from "redux-devtools-extension";
import {configureStore} from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import CustomerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: CustomerReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
