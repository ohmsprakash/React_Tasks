import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  return(
    <div style={{}}>
    <center>
    <h1>{count}</h1>
    <button style={{backgroundColor:"azure"}}onClick={()=>{if(count<10)setCount(count+1)}}>Increment</button>
    <button style={{backgroundColor:"bisque"}}onClick={()=>{if(count>0)setCount(count-1)}}>Decrement</button>
    <button style={{backgroundColor:"blue"}}onClick={()=>setCount(0)}>Reset</button>
    </center>
    </div>
  )
}

export default App;
