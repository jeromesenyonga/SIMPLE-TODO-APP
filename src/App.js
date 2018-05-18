import React, { Component} from 'react';
import './App.css';
import List from './list'

export default class App extends Component{
  constructor(props){ 
    super(props);
    this.state = {
      term: "", //to store what we passing as a value to our input
      items: [] //to store every value which we passing to our todo list  
    };
  }

  onChange = (event) =>{ //This function will make changes to the state depending on the current input value.
    this.setState({term: event.target.value}); //for the value that takes what is stored in our state as term
  } //this.setState Changes to the state we need

  onSubmit = (event) =>{
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items,  this.state.term]
    });
  }

  render(){
    return(
      <div>
        <form className='App' onSubmit={this.onSubmit}>
        <input value={this.state.term} onChange={this.onChange}/>
        <button>Add</button>
        </form>
        <List items={this.state.items}/>
      </div>
    );
  }
}