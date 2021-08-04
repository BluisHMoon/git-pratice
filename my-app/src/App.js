import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import TODOForm from './view/TODOForm';
import TODOList from './view/TODOList';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list : [],
    }
  }

  handleSubmitInput(data){
    this.state.list.push(data);
    this.setState({
      list: this.state.list
    });
  }

  render(){
    return(
      <div className="content">
        <TODOForm onClick={this.handleSubmitInput.bind(this)}/>
        <TODOList/>
      </div>
    );
  }
}

export default App;
