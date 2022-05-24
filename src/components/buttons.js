import React from 'react';
import PropTypes from 'prop-types';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.label = props.label;
    this.id = props.id;
  }

  render() {
    return (<button id={this.id} type="button">{this.label}</button>);
  }
}

Buttons.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
};

Buttons.defaultProps = {
  id: '',
};

export default Buttons;
