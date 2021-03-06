import React, { Component } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { UserImg, SignView, LoginBtn, AuthQuestion, AuthLink } from './style';
import { ErrorMsg } from '../AuthInput/style';
import AuthInput from '../AuthInput/AuthInput';
import Auth from '../../services/Auth';
import userRoles from '../../constants/userRoles';
import paths from '../../constants/paths';


class AuthWindow extends Component {
  state = {
    errors: {},
    redirectToReferrer: false,
    user: {
      email: '',
      password: '',
    },
    successMessage: '',
  };

  componentDidMount = () => {
    const { successMessage: storedMessage, removeSucessMsg } = this.props;

    if (storedMessage) {
      removeSucessMsg();
    }
    this.setState({
      successMessage: storedMessage,
    });
  }

  getFormData = () => {
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    return `email=${email}&password=${password}`;
  }

  processFormLogin = async () => {
    this.props.fetchSignIn(this.getFormData())
      .then(async (res) => {
        if (res.status !== 200) {
          throw await res.json();
        }
        return res.json();
      })
      .then((data) => {
        Auth.authenticateUser(data.token);
        this.setState({
          errors: {},
          redirectToReferrer: true,
        });
      })
      .catch((errorData) => {
        const errors = errorData.errors ? errorData.errors : {};
        errors.summary = errorData.message;

        this.setState({
          errors,
        });
      });
  }

  processFormSignUp = async () => {
    const { fetchSignUp, addSucessMsg } = this.props;

    fetchSignUp(this.getFormData())
      .then(async (res) => {
        if (res.status !== 200) {
          throw await res.json();
        }
        return res.json();
      })
      .then((data) => {
        this.setState({
          errors: {},
        });
        addSucessMsg(data.message);
        Router.push(paths.login);
      })
      .catch((errorData) => {
        const errors = errorData.errors ? errorData.errors : {};
        errors.summary = errorData.message;

        this.setState({
          errors,
        });
      });
  }

  changeUser = (event) => {
    const { name, value } = event.target;
    const { user } = this.state;
    user[name] = value;
    this.setState({
      user,
    });
  }

  render() {
    // const { from } = this.props.location.state || { from: { pathname: '/' } };
    // const { pathname } = this.props.location;
    const { pathname } = Router;
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return Router.push('/');
    }
    const { summary, email, password } = this.state.errors;
    const { successMessage } = this.state;
    return (
      <SignView>
        <UserImg userRole={pathname === paths.login ? userRoles.user : userRoles.foreign} />
        {successMessage && <p className="success-message">{successMessage}</p>}
        <ErrorMsg isError={summary} />
        <AuthInput autocomplete="off" name="email" placeholder="enter your email" handleChange={this.changeUser} isError={email} />
        <AuthInput name="password" type="password" placeholder="enter your password" handleChange={this.changeUser} isError={password} />
        {pathname === paths.login ? (
          <React.Fragment>
            <LoginBtn onClick={this.processFormLogin}>Sign In</LoginBtn>
            <AuthQuestion>
              {'Don\'t have an account? '}
              <Link href={paths.join} passHref prefetch>
                <AuthLink>Create one.</AuthLink>
              </Link>
            </AuthQuestion>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <LoginBtn onClick={this.processFormSignUp}>Sign Up</LoginBtn>
            <AuthQuestion>
              {'Already have an account? '}
              <Link href={paths.login} passHref prefetch>
                <AuthLink>Log in.</AuthLink>
              </Link>
            </AuthQuestion>
          </React.Fragment>
        )}
      </SignView>
    );
  }
}

AuthWindow.propTypes = {
  addSucessMsg: PropTypes.func.isRequired,
  removeSucessMsg: PropTypes.func.isRequired,
  successMessage: PropTypes.string.isRequired,
};

export default AuthWindow;
