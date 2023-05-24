
import React, {useState} from "react"
import './App.css';

function App() {

  

  return (
    <div className="App">
       <FormInput/>
       <ChildComponent/>
    </div>
  );
}

function FormInput(){
  const [input,setInput]=useState("")
  return(
    <>
      <input
          type='text'
          value={input}
          onChange={(e)=>setInput(e.target.value)}
       />
       <h3>Text input is {input}</h3>
    </>
  )
}

function ChildComponent(){
  console.log("Rendering child components");
  return <h4>Child component</h4>
}

export default App;
