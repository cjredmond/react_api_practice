import React, { Component } from 'react';
import PersonItem from './PersonItem';

class Persons extends Component {
  render() {
    let personItems;
    if(this.props.persons){
      personItems = this.props.persons.map(person => {
        //console.log(project);
        return (
          <PersonItem key={person.name} person={person} />
        )
      });
    }
    return (
      <div className="People">
        <h3>People List</h3>
        {personItems}
      </div>
    );
  }
}

Persons.propTypes = {
  persons: React.PropTypes.array,
}

export default Persons;
