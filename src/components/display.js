import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  constructor({ label }) {
    super({ label });
    this.label = label;
  }

  render() {
    return (<p>{this.label}</p>);
  }
}

Display.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Display;
