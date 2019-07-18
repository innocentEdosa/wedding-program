import React from 'react';
import PropTypes from 'prop-types';
import './Backdrop.scss';

const Backdrop = ({ hideBackdrop, displayBackdrop }) => {
  const display = (displayBackdrop) ? 'showBackdrop' : '';
  return (
    <div onClick={hideBackdrop} className={['backdrop', display].join(' ')} />
  );
};

Backdrop.propTypes = {
  hideBackdrop: PropTypes.func.isRequired,
  displayBackdrop: PropTypes.bool.isRequired,
};

export default Backdrop;
