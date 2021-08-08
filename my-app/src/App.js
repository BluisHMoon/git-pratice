import React, { PureComponent } from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';
import TODOForm from './view/TODOForm';
import TODOList from './view/TODOList';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
  }

  // 刪除物件
  handleDeleteItem = (itemId) => {
    let newList = this.state.lists;
    const deleteId = newList.findIndex(
      function findItemId(item) {
        return item.id === itemId;
      }
    );

    if (deleteId !== -1) {
      newList.splice(deleteId, 1);
      this.setState({
        lists: [...newList],
      });
    }
  }

  // 將資料加入陣列
  handleSubmitInput = (data) => {
    this.state.lists.push(data);
    this.setState({
      lists: [...this.state.lists],
    });
  }

  render() {
    return (
      <div className="content">
        <TODOForm submitTODO={this.handleSubmitInput} />
        <TODOList lists={this.state.lists} onDeleteItem={this.handleDeleteItem} />
      </div>
    );
  }
}

export default App;
