const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
  };

  export default function accountReducer(state = initialState, action) {
    switch (action.type) {
      case "account/deposit":
        return { ...state, balance: state.balance + action.payload };
      case "account/withdraw":
        return { ...state, balance: state.balance - action.payload };
      case "account/requestLoan":
        if (state.loan > 0) {
          return state;
        }
        return {
          ...state,
          loan: action.payload.amount,
          loanPurpose: action.payload.loanPurpose,
          balance: state.balance + action.payload.amount,
        };
      case "account/payLoan":
        return {
          ...state,
          loan: 0,
          loanPurpose: "",
          balance: state.balance - state.loan,
        };
      default:
        return state;
    }
  }
  
  export function deposite(amount) {
    return { type: "account/deposit", payload: amount };
  }
  
  export function withdraw(amount) {
    return { type: "account/withdraw", payload: amount };
  }
  
  export function requestLoan() {
    return {
      type: "account/requestLoan",
      payload: { amount: 1000, loanPurpose: "House" },
    };
  }

  // store.dispatch({ type: "account/deposit", payload: 500 }); // Corrected action type

// store.dispatch({ type: "account/deposit", payload: 200 }); // Corrected action type

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 100, loanPurpose: "House" },
// });

// console.log(store.getState());

// store.dispatch({
//   type: "account/payLoan"});
// console.log(store.getState());

// store.dispatch(deposite(500));
// store.dispatch(withdraw(100));
// store.dispatch(requestLoan());