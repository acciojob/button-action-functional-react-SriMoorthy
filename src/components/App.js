import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  const[isVisible,setIsVisbible] = useState(false)

  const HandleClick = () =>{
    setIsVisbible(true)
  }
  
  return (
    <div id="main">
      <button id="click" onClick={HandleClick}>Click me</button>
      {isVisible && 
      (<p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>)}

    </div>
  );
}


export default App;
