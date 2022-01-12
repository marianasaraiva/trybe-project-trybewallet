// Coloque aqui suas actions
import requestFetchAPI from '../services/resquestAPI';

export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = (payload) => ({ type: LOGIN_USER, payload });

export const REQUEST_API = 'REQUEST_API';
export const requestAPI = () => ({ type: REQUEST_API });

export const GET_DATA_API = 'GET_DATA_API';
export const getDataAPI = (payload) => ({ type: GET_DATA_API, payload });

export const GET_EXPENSES = 'GET_EXPENSES';
export const getExpenses = (payload) => ({ type: GET_EXPENSES, payload });

export const fetchAPICurrencies = () => (dispatch) => {
  dispatch(requestAPI());
  requestFetchAPI()
    .then((data) => {
      dispatch(getDataAPI(data));
    });
};

// Monitoria p/ corrigir o bug
// // criar nova action para o expenses, para quando clicar no botao ele dispara essa action para detro do reducer (4)
// // nova action para o expenses Rates, pois seria uma nova requisicao da API salvando o objetao
// // uma unica action apenas para salvar no estado global apenas as keys do objetao na currencies
// export const GET_KEYS_DATA = 'GET_KEYS_DATA';
// export const GET_EXPENSES_RATES = 'GET_EXPENSES_RATES';
// export const getKeysData = (payload) => ({ type: GET_KEYS_DATA, payload });
// export const getExpensesRates = (payload) => ({ type: GET_EXPENSES_RATES, payload });
