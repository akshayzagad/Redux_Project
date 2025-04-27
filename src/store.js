import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import CustomerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: CustomerReducer,
});

const store = createStore(rootReducer);

export default store;
