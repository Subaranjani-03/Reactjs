import React, { useRef } from "react";
import "./App.css";

const App = () => {
  const circleRef = useRef(null);
  const angleRef = useRef(0); 

  const rotateCircle = () => {
    angleRef.current += 20; 
    circleRef.current.style.transform = `rotate(${angleRef.current}deg)`;
  };

  return (
    <div className="container">
      <div className="circle" ref={circleRef}>
        <img src="/src/flight1.png" alt="flight" />
      </div>

      <button onClick={rotateCircle}>Fly Step</button>
    </div>
  );
};

export default App;