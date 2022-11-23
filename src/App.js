import { useState } from "react";
import './App.css';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" name='a' data-testid="hpi-a" onBlur={()=>setShow(!show)}/>
        <input type="text" name='b' data-testid="hpi-b" />
        {show?<p name='c' data-testid="hpi-c">Blur from a to be done</p>:null}
      </header>
    </div>
  );
}

export default App;
