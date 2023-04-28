import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    
    this.state = {
      text: "Hello",
      idList: ["111", "222", "333"],
      pickedColor: "red",
      textInputString: "",
    };
  }

  generateNewId(){
    let idString = "";
    for (let i = 0; i < 3; i++){
      const randNum = Math.floor(Math.random() * 10);
      idString += randNum;
    }
    return idString;
  }

  render(){
    /* This is what displays stuff on the screen */
    /* This returns JSX */
    return (
      <div className="App">
        <h1>React Example</h1>
        <input type="color" name="colorBox" id="colorBox"
        onChange={(event)=>{
          this.setState({
            pickedColor: event.target.value
          });
        }} />
        <p>{this.state.text}</p>
        <form onSubmit={(ev)=>{
          ev.preventDefault();
          this.setState({
            text: this.state.textInputString
          });
        }}>
          <input type="text" name="textInput" id="textInput"
          value={this.state.textInputString} 
          onChange={(ev)=>{
            this.setState({
              textInputString: ev.target.value
            });
          }}
        />
        <button type="button">Submit the Sacred Text</button>
        <button>Other Submit</button>
        </form>
        {/* {<button onClick={()=>{
          // Generate a new Id
          const newId = this.generateNewId();
          // Do not update state directly
          this.setState({
            count: this.state.count + 1,
            idList: [...this.state.idList, newId]
          });
        }}>Increase Count
        </button>} */}
        <ul>
          {this.state.idList.map((item, index)=>{
            return <li key={item+index} style={{color:`${this.state.pickedColor}`}}>
              <p>{item}</p>
            </li>
          })}
        </ul>
      </div>
    );
  }
}


export default App;
