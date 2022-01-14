import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteItem } from '../actions';

export class Table extends Component {
  handleClick = (event) => {
    const { tableData } = this.props;
    return tableData.filter((e) => Number(e.id) !== Number(event.target.value));
  }

  render() {
    const { tableData, deleteItemWallet } = this.props;

    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        { tableData.map((e) => (
          <tr key={ e.id }>
            <td>{e.description}</td>
            <td>{e.tag}</td>
            <td>{e.method}</td>
            <td>{e.value}</td>
            <td>{(e.exchangeRates[e.currency].name).split('/', 1)}</td>
            <td>{Number(e.exchangeRates[e.currency].ask).toFixed(2)}</td>
            <td>
              {(Number(e.exchangeRates[e.currency].ask) * Number(e.value)).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button
                type="button"
                data-testid="delete-btn"
                value={ e.id }
                onClick={ (event) => deleteItemWallet(this.handleClick(event)) }
              >
                Excluir
                {/* ![image](btnExcluir.gif) */}
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  tableData: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteItemWallet: (payload) => dispatch(deleteItem(payload)),
});

Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteItemWallet: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
