import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPICurrencies } from '../actions';
import Forms from '../components/Forms';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { walletData } = this.props;
    walletData();
  }

  render() {
    return (
      <div>
        <Header />
        <Forms />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  walletData: () => dispatch(fetchAPICurrencies()),
});

Wallet.propTypes = {
  walletData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
