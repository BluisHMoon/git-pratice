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
      list: [],
    };
  }

  render(){
    return(
      <div className="content">
        <TODOForm />
        <TODOList />
      </div>
    );
  }

  // constructor(props){
  //   // 呼叫父類別建構子
  //   super(props);
  //   this.state = { items: [], title: '', description: ''};
  //   this.titleChange = this.titleChange.bind(this);
  //   this.descriptionChange = this.descriptionChange.bind(this);
  //   this.dataSubmit = this.dataSubmit.bind(this);
  // }

  // // titleChange = () => {
  // //   const {} = this.props;
  // // }

  // // descriptionChange = () => {
  // //   const {} = this.props;
  // // }

  // // dataSubmit = () => {
  // //   const {} = this.props;
  // // }

  // render(){
  //   return(
  //     <div className="content">

  //       <div className="list">
  //         <div className="input-area">
  //           標題輸入框
  //           <input 
  //             type="text" 
  //             name="title"
  //             onChange={this.titleChange}
  //             value={this.state.title}
  //           />
  //         </div>
  //         <div className="input-area">
  //           內容輸入框
  //           <input 
  //             type="text" 
  //             name="description"
  //             onChange={this.descriptionChange}
  //             value={this.state.description}
  //           />
  //         </div>
  //         <div className="btn-area">
  //           <button 
  //             type="button"
  //             name="submit"
  //             onClick={this.dataSubmit}
  //           >
  //             新增
  //           </button>
  //         </div>
  //       </div>
  //       <div className="result_area">
  //         <TODOResult items = {this.state.items} />
  //       </div>
  //     </div>
  //   );
  // }

  // titleChange(e) {
  //   this.setState({ title: e.target.value });
  // }

  // descriptionChange(e) {
  //   this.setState({ description: e.target.value });
  // }

  // dataSubmit(e){
  //   e.preventDefault();
  //   if(this.state.title.length === 0 || this.state.description.length === 0){
  //     return;
  //   }

  //   const newItem = {
  //     id: Date.now(),
  //     title: this.state.title,
  //     description: this.state.description
  //   };

  //   this.setState(state => ({
  //     items: state.items.concat(newItem),
  //     title: '',
  //     description: ''
  //   }));
  // }
}

export default App;
