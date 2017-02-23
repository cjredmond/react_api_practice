import React, { Component } from 'react';

class PersonItem extends Component {

  render() {
    return (
      <li className="Person">
        <strong>{this.props.person.name}</strong>: {this.props.person.number}
        <p>Fave Color: {this.props.person.color}</p>
      </li>
    );
  }
}

PersonItem.propTypes = {
  persons: React.PropTypes.object,
}

export default PersonItem;
