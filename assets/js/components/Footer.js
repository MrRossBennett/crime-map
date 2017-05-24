import React from 'react';
import PropTypes from 'prop-types';
import iconStack from '../icons/logo';

const Footer = props => {
  const {
    info,
  } = props;

  return (
    <footer className="crime-app-footer">
    <iconStack />
    <small>{info}</small>
    </footer>
  )
}

Footer.propTypes = {
  info: PropTypes.string
};

export default Footer;
