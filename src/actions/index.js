// Coloque aqui suas actions
import requestFetchAPI from '../services/resquestAPI';

export const LOGIN_USER = 'LOGIN_USER';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const loginUser = (payload) => ({ type: LOGIN_USER, payload });
export const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });

export function fetchAPICurrencies() {
  return (dispatch) => requestFetchAPI()
    .then((data) => dispatch(getCurrencies(data)));
}

// export function fetchAPICurrencies() {
//   return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
//     .then((response) => response.json())
//     .then((data) => dispatch(getCurrencies(data)));
// }

// export function fetchAPICurrencies() {
//   return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
//     .then((response) => response.json())
//     .then((data) => {
//       const currenciesArr = Object.values(data);
//       // filtrando para retirr o dolar turismo da API.
//       const filterUSDT = currenciesArr.filter((e) => e.codein !== 'BRLT');
//       dispatch(getCurrencies(filterUSDT));

//       const coinsArr = Object.keys(data);
//       dispatch(setRequestCoins(coinsArr));

//       // const expensieArr = Object.values(data);
//       // // expensieArr.map((obj) => )
//       // dispatch(getExpensie(expensieArr));
//     });
// }
