import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import wallet from '../imagens/wallet2.png';
import './Header.css';

export class Header extends Component {
  priceMomentCurrency = (exchangeRates, currency) => Object.values(exchangeRates)
    .filter(({ code, codein }) => code === currency && codein !== 'BRLT')
    .map(({ ask }) => ask)

  convertCoinsAndSum = () => {
    const { coinsWallet } = this.props;
    const coinsObject = coinsWallet
      .map(({ value, currency, exchangeRates }) => ({
        value,
        currency,
        priceActual: this.priceMomentCurrency(exchangeRates, currency),
      }));

    const convertPrices = coinsObject.map(({ value, priceActual }) => ({
      total: (Number(value * priceActual)),
    }));

    return convertPrices.reduce((acc, num) => acc + num.total, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div>
          <img src={ wallet } alt="carteira" width="170px" />
          <h1>Trybewallet</h1>
        </div>
        <div>
          <h3 data-testid="email-field">{ email }</h3>
          <p data-testid="total-field">{ (this.convertCoinsAndSum()).toFixed(2) }</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  coinsWallet: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  coinsWallet: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
