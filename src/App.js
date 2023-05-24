
import React, {useState} from "react"
import './App.css';

function App() {

  const [input,setInput]=useState("")

  return (
    <div className="App">
       <input
          type='text'
          value={input}
          onChange={(e)=>setInput(e.target.value)}
       />
       <h3>Text input is {input}</h3>
       <ChildComponent/>
    </div>
  );
}

function ChildComponent(){
  console.log("Rendering child components");
  return <h4>Child component</h4>
}

export default App;
