import React, { useState, useMemo } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);

  const doubleValue = useMemo(() => {
    console.log("Calculating...");
    return num * 2;
  }, [num]); 

  return (
    <div>
      <h2>useMemo</h2>

      <p>Count: {count}</p>
      <p>Double: {doubleValue}</p>

      <button onClick={() => setNum(num + 1)}>
        Increase Number
      </button>

      <button onClick={() => setCount(count + 1)}>
        Count
      </button>
    </div>
  );
};

export default App;