import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import wallet from '../reducers/wallet';

export class Forms extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currencies: [],
  //     expenses: [],
  //   };
  // }

  render() {
    // const { value } = this.state;
    // const { getCurrencies, getExpense } = this.props;
    return (
      <form>
        <label htmlFor="value-input">
          Despesas:
          <input
            type="text"
            id="value-input"
            data-testid="value-input"
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input
            type="text"
            id="description-input"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="currency-input">
          Moeda:
          <select
            data-testid="currency-input"
            id="currency-input"
            // value={ value }
            // onChange={ this.handleChange }
          >
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
        </label>

        <label htmlFor="method-input">
          Método de pagamento:
          <select
            data-testid="method-input"
            id="method-input"
            // value={ value }
            // onChange={ this.handleChange }
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
            // value={ value }
            // onChange={ this.handleChange }
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
          data-testid="total-field"
        >
          Adicionar despesa
        </button>

      </form>
    );
  }
}

// mapStateToProps = (state) => ({
//   getCurrencies: state.wallet.currencies,
//   getExpense: state.wallet.expense,
// });
// fazer connect
export default Forms;
