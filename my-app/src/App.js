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

  // 編輯物件
  handleEditItem(itemId){
    
  }

  // 刪除物件
  handleDeleteItem(itemId){
    let newList = this.state.lists;
    newList.splice(itemId, 1);
    this.setState({
      lists : newList
    });
  }

  // 將資料加入陣列
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
        <TODOList lists={this.state.lists} onDeleteItem={this.handleDeleteItem.bind(this)}/>
      </div>
    );
  }
}

export default App;
