
import React,{Suspense, lazy} from "react"
import './App.css';
const Users =lazy(()=>import("./Components/Users"))
const Posts =lazy(()=>import("./Components/Posts"))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users/>
        <Posts/>
      </Suspense>
    </div>
  )
}



export default App;
