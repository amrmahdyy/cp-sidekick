import logo from './logo.svg';
import ReactJson from 'react-json-view'
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [problem, setProblem] = useState({})

  useEffect(() => {
    fetch("http://localhost:8081/?id=1325/A").
    then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        setProblem(result)
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setProblem({"el 3asfoor": "الي مطير العقول"})
      }
    )
    return () => {
      //cleanup
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <ReactJson src={problem} theme="monokai"/>
      </header>
    </div>
  );
}

export default App;
