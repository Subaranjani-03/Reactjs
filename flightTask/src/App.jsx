import React, { useRef } from "react";
import "./App.css";

const App = () => {
  const planeRef = useRef(null);
  const angleRef = useRef(0);

  const moveStep = () => {
    const containerSize = 300;
    const planeSize = 60;

    // exact radius (important)
    const radius = (containerSize / 2) - (planeSize / 2);
    const center = containerSize / 2;

    angleRef.current += 0.3;

    const x = center + radius * Math.cos(angleRef.current);
    const y = center + radius * Math.sin(angleRef.current);

    const rotate = angleRef.current * (180 / Math.PI) + 90;

    planeRef.current.style.left = `${x}px`;
    planeRef.current.style.top = `${y}px`;
    planeRef.current.style.transform = `translate(-50%, -50%) rotate(${rotate}deg)`;
  };

  return (
    <div className="container">

      <div className="circle">
        <img
          ref={planeRef}
          src="./src/flight.png"
          alt="plane"
          className="plane"
        />
      </div>

      <button onClick={moveStep}>Fly Step</button>
    </div>
  );
};

export default App;