import React, { Component } from 'react';

class PersonItem extends Component {

  render() {
    var stars = '*'.repeat(this.props.person.number)
    return (
      <div className="Person">
        <strong>{this.props.person.name}</strong>
        <li> {this.props.person.number} {stars}</li>
        <li className={this.props.person.color.toLowerCase()}>Fave Color: {this.props.person.color}</li>
      </div>
    );
  }
}

PersonItem.propTypes = {
  persons: React.PropTypes.object,
}

export default PersonItem;
