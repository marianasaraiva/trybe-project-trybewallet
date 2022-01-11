import { GET_CURRENCIES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, currencies: action.payload };
  // case GET_EXPENSIE:
  //   return { ...state, expensies: action.payload };
  // case GET_CURRENCIES:
  //   return {
  //     ...state,
  //     currencies: {
  //       id: action.payload,
  //       value: action.payload,
  //       description: action.payload,
  //       currency: action.payload,
  //       method: action.payload,
  //       tag: action.payload,
  //       exchangesRates: action.payload,
  //     },
  //   };
  default:
    return state;
  }
}

export default wallet;
