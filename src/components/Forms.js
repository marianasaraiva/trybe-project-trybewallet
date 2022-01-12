import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Forms extends Component {
  constructor() {
    super();
    this.state = {
      // id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      // exchangeRates: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   this.setResultAPISelect();
  //   // const { setFetchAPI } = this.props;
  //   // setFetchAPI();
  // }

  // setResultAPISelect() {
  //   requestFetchAPI()
  //     .then((response) => {
  //       const result = Object.keys(response);
  //       this.setState({ arrayCurrencies: result });
  //     });
  // }

  handleChange({ target }) {
    const { name, value } = target;
    // fazer ternario para pegar o selected para ver se é um option e se está selecionado
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { dataWalletState } = this.props;
    console.log(dataWalletState);
    const { value, description, currency, method, tag } = this.state;

    return (
      <form>
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
              .map((moeda) => <option key={ moeda }>{moeda}</option>)}
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
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
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
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>

        <button
          type="button"
          name="button-add"
          id="button-add"
          // onClick={ () => {
          //   setFetchAPI(this.state);
          //   // setFetchAPI({ id, value, description, currency, method, tag, exchangeRates });
          //   this.setState((prevState) => ({ id: prevState.id + 1 }));
          // } }
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

// const mapDispatchToProps = (dispatch) => ({
//   setFetchAPI: (state) => dispatch(fetchAPICurrencies(state)),
//   // salvarEstadoGlobal:
// });

Forms.propTypes = {
  dataWalletState: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Forms);
