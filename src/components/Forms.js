import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import requestFetchAPI from '../services/resquestAPI';
import { fetchAPICurrencies } from '../actions';

export class Forms extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: [],
      arrayCurrencies: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.setResultAPISelect = this.setResultAPISelect.bind(this);
  }

  componentDidMount() {
    this.setResultAPISelect();
    // const { setFetchAPI } = this.props;
    // setFetchAPI();
  }

  setResultAPISelect() {
    requestFetchAPI()
      .then((response) => {
        const result = Object.keys(response);
        this.setState({ arrayCurrencies: result });
      });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // objCurrencies() {
  //   const { setFetchAPI} = this.props;
  //   setFetchAPI();
  // }

  render() {
    const { arrayCurrencies } = this.state;
    const { setFetchAPI } = this.props;
    return (
      <form>
        <label htmlFor="value-input">
          Despesas:
          <input
            type="text"
            id="value-input"
            data-testid="value-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input
            type="text"
            id="description-input"
            data-testid="description-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="currency-input">
          Moeda:
          <select
            data-testid="currency-input"
            id="currency-input"
            onChange={ this.handleChange }
          >
            { arrayCurrencies
              .filter((e) => e !== 'USDT')
              .map((e) => <option Key={ e }>{e}</option>)}
          </select>
        </label>

        <label htmlFor="method-input">
          Método de pagamento:
          <select
            data-testid="method-input"
            id="method-input"
            onChange={ this.handleChange }
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="cartaoCredito">Cartão de crédito</option>
            <option value="cartaoDebito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          Categoria:
          <select
            data-testid="tag-input"
            id="tag-input"
            onChange={ this.handleChange }
          >
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>

        <button
          type="button"
          onClick={ () => {
            // setFetchAPI: {id, value, description, currency, method, tag, exchangeRates }
            setFetchAPI(this.state);
            this.setState((prevState) => ({ id: prevState.id + 1 }));
          } }
        >
          Adicionar despesa
        </button>

      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  getFetchAPI: state.wallet.curriencies,
});

const mapDispatchToProps = (dispacth) => ({
  setFetchAPI: () => dispacth(fetchAPICurrencies()),
});

Forms.propTypes = {
  setFetchAPI: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
