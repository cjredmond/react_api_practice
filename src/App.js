import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Persons from './Components/Persons'

class App extends Component {
  constructor(){
    super();
    this.state = {
      persons: []
    }
  }

  getPeople(){
    $.ajax({
      url: 'https://fierce-mountain-11501.herokuapp.com/api/:persons/',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({persons: data}, function(){
        }
        );
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }

  componentWillMount(){
    this.getPeople();
  }



  render() {
    return (
      <div className="App">
        <Persons persons={this.state.persons} />
      </div>
    );
  }
}

export default App;
