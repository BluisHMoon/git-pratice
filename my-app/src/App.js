import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="content">
      <div className="list">
        <div className="input-area">
          標題輸入框
          <input 
            type="text" 
            name="title"
          />
        </div>
        <div className="input-area">
          內容輸入框
          <input 
            type="text" 
            name="description"
          />
        </div>
        <div className="btn-area">
          <button 
            type="button"
            name="submit"
            onClick={insertNewData}
          >
            新增
          </button>
        </div>
      </div>
      <div className="result_area">

      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}



export default App;
