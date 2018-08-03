import React from 'react';
import PropTypes from 'prop-types';
import { Input, ErrorMsg } from './style';

const AuthInput = ({
  name, placeholder, type, handleChange, isError,
}) => (
  <React.Fragment>
    <Input name={name} placeholder={placeholder} type={type} onChange={handleChange} />
    <ErrorMsg isError={isError} />
  </React.Fragment>
);

AuthInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  isError: PropTypes.string,
};

AuthInput.defaultProps = {
  type: 'text',
  isError: '',
};

export default AuthInput;
