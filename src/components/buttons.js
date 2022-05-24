import React from 'react';
import PropTypes from 'prop-types';

class Buttons extends React.Component {
  constructor({ label }) {
    super({ label });
    this.label = label;
  }

  render() {
    return (<button type="button">{this.label}</button>);
  }
}

Buttons.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Buttons;
