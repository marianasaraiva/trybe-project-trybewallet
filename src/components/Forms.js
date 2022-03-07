import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPICurrencies, getExpenses } from '../actions';
import './Forms.css';

const task = 'Alimentação';

// Ajuda e discussão da lógica com a colega Nathália Miranda, Gabriel Fontes e Jonatas Passos.
// Discussão do Requisito na Monitoria Individual com Paulo
export class Forms extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: task,
      exchangeRates: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = async () => {
    const { id } = this.state;
    const { dataWalletState, expenses, currencies } = this.props;
    await currencies();
    expenses({ ...this.state, exchangeRates: dataWalletState });
    this.setState({
      id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: task,
      exchangeRates: [],
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { dataWalletState } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <form className="form-input">
        <label htmlFor="value-input">
          Despesas:
          <input
            type="text"
            name="value"
            id="value-input"
            value={ value }
            data-testid="value-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input
            type="text"
            name="description"
            value={ description }
            id="description-input"
            data-testid="description-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="currency-input">
          Moeda:
          <select
            name="currency"
            value={ currency }
            id="currency-input"
            data-testid="currency-input"
            onChange={ this.handleChange }
          >
            { Object.keys(dataWalletState)
              .filter((moeda) => moeda !== 'USDT')
              .map((moeda) => (
                <option key={ moeda } data-testid={ moeda }>{moeda}</option>
              ))}
          </select>
        </label>

        <label htmlFor="method-input">
          Método de pagamento:
          <select
            data-testid="method-input"
            name="method"
            value={ method }
            id="method-input"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          Categoria:
          <select
            data-testid="tag-input"
            name="tag"
            value={ tag }
            id="tag-input"
            onChange={ this.handleChange }
          >
            <option value="Alimentação">{ task }</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <button
          type="button"
          name="button-add"
          id="button-add"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  dataWalletState: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(fetchAPICurrencies()),
  expenses: (state) => dispatch(getExpenses(state)),
});

Forms.propTypes = {
  dataWalletState: PropTypes.instanceOf(Object).isRequired,
  expenses: PropTypes.func.isRequired,
  currencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
