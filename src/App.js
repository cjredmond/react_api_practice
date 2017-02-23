import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor(){
    super();
    this.state = {
      people: []
    }
  }

  getPeople(){
    $.ajax({
      url: 'https://fierce-mountain-11501.herokuapp.com/api/:persons/',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({people: data}, function(){
          console.log(this.state)
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

      </div>
    );
  }
}

export default App;
