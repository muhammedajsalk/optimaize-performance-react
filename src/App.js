
import React, {useState,memo,useCallback} from "react"
import './App.css';

function App() {

  const [input,setInput]=useState("")
  const [count,setCount]=useState(0);

  const IncrementCount= useCallback(()=>{
    setCount(count+1);
  },[count])

  return (
    <div className="App">
       <input
          type='text'
          value={input}
          onChange={(e)=>setInput(e.target.value)}
       />
       <button onClick={()=>setCount(count+1)}>Increment Count</button>
       <h3>Text input is {input}</h3>
       <h3>Count is {count}</h3>
       <hr/>
       <ChildComponent IncrementCount={IncrementCount} count={count}/>
    </div>
  );
}

const ChildComponent=memo(function ChildComponent({count,IncrementCount}){
  console.log("Rendering child components");
  return(

    <>
      <button onClick={IncrementCount}>Click ME</button>
      <h4>Count from Child component is {count}</h4>
    </>
  ) 
})



export default App;
