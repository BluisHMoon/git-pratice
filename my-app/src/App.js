import React from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';
import TODOForm from './view/TODOForm';
import TODOList from './view/TODOList';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      lists : [],
    }
  }

  handleSubmitInput(data){
    this.state.lists.push(data);
    this.setState({
      lists: this.state.lists
    });
  }

  render(){
    return(
      <div className="content">
        <TODOForm submitTODO={this.handleSubmitInput.bind(this)}/>
        <TODOList lists={this.state.lists}/>
      </div>
    );
  }
}

export default App;
