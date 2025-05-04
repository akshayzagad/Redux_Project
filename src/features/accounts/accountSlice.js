const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
    isLoading:false
  };

  export default function accountReducer(state = initialState, action) {
    switch (action.type) {

      case "account/deposit":
        return { ...state, balance: state.balance + action.payload, isLoading:false };

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
        case"account/corruncyConvertion":
        return{...state,isLoading:true}
      default:
        return state;
    }
  }
  
  export function deposite(amount,currency) {
    if (currency === "USD") {
      return { type: "account/deposit", payload: amount };
    } 
    return async function(dispatch,getState) {

      dispatch({type:"account/corruncyConvertion"})

      /** Api call */
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
      );
      const data = await res.json();
      const converted = data.rates.USD;
      console.log(converted);
      
      dispatch({ type: "account/deposit", payload: amount });
    }
  }
  
  export function withdraw(amount) {
    return { type: "account/withdraw", payload: amount };
  }
  
  export function requestLoan(amount,loanPurpose) {
    return {
      type: "account/requestLoan",
      payload: { amount, loanPurpose },
    };
  }

  export function payLoan() {
    return { type: "account/payLoan" };
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