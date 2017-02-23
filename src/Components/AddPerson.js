import React, { Component } from 'react';

class AddPerson extends Component {
  constructor(){
    super();
    this.state = {
      newPerson:{}
    }
  }

  static defaultProps = {
    categories: ['Blue', 'Green', 'Yellow', 'Red', 'Orange', 'Purple']
  }

  handleSubmit(e){
    if(this.refs.name.value === ''){
      alert('title is required');
    } else {
      console.log('hi')
      fetch('https://fierce-mountain-11501.herokuapp.com/api/:persons/',{
        method: 'POST',
        headers: {
          'Accept' : 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.refs.name.value,
          color: this.refs.category.value,
          number: this.refs.number.value,
        })
      })
      .then ( function (resp){
        console.debug(resp);
      })
      .catch(function(error) {
        console.error(error)
      })

  }}

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });

    return (
      <div>
        <h3>Add Person</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Name</label><br/>
            <input type="text" ref="name" />
          </div>
          <div>
            <label>FaveNumber</label><br/>
            <input type="text" ref="number" />
          </div>
          <div>
            <label>Color</label><br/>
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

AddPerson.propTypes = {
  categories: React.PropTypes.array,
  addPerson: React.PropTypes.func
}

export default AddPerson;
