import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import './Login.css';
import wallet from '../imagens/wallet2.png';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isRequired: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.validateInput);
  }

  validateInput() {
    const { email, password } = this.state;
    const number = 6;
    // Regex Valida E-mail: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    // Ajuste no Regex com Vinicius Savordelli
    const regexValidaEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?$/i;
    const emailValidation = regexValidaEmail.test(String(email).toLowerCase());
    if (emailValidation && password.length >= number) {
      this.setState({ isRequired: false });
    } else {
      this.setState({ isRequired: true });
    }
  }

  render() {
    const { isRequired, email } = this.state;
    const { setLogin, history } = this.props;
    return (
      <div>
        <form className="form-login">
          <div>
            <img src={ wallet } alt="carteira" width="250px" />
            <h1>Trybewallet</h1>
          </div>
          <label htmlFor="email">
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              id="email"
              onChange={ this.handleChange }
              data-testid="email-input"
            />
          </label>

          <label htmlFor="password">
            <input
              name="password"
              type="password"
              placeholder="Senha"
              id="password"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>

          <button
            type="button"
            disabled={ isRequired }
            onClick={ () => {
              setLogin(email);
              history.push('/carteira');
            } }
          >
            Entrar
          </button>
        </form>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLogin: (payload) => dispatch(loginUser(payload)),
});

Login.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  setLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
