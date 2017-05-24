import React from 'react';
import PropTypes from 'prop-types';
import IconReact from '../icons/Logo';

const Footer = props => {
  const {info} = props;

  return (
    <footer className="crime-app-footer">
      <IconReact width="60" height="60" fill="#0E4F64" />
      <small>{info}</small>
    </footer>
  )
}

Footer.propTypes = {
  info: PropTypes.string
};

export default Footer;
