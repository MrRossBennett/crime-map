import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const {
    title,
    intro
  } = props;

  return (
    <header className="crime-app-header">
      <h1>{title}</h1>
      <p className="crime-app-intro">
        {intro}
      </p>
    </header>
  )
}

Header.propTypes = {
  title: React.PropTypes.string
};

export default Header;
