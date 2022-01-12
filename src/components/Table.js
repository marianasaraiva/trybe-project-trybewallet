import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Table extends Component {
  render() {
    const { tableData } = this.props;
    console.log(tableData);

    return (
      // https://www.homehost.com.br/blog/criar-sites/tabela-html/
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
          </tr>
        ))}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  tableData: state.wallet.expenses,
});

Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Table);
