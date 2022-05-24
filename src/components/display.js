import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.label = props.label;
    this.class = props.class;
  }

  render() {
    return (<div className={this.class}>{this.label}</div>);
  }
}

Display.propTypes = {
  label: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
};

export default Display;
