import React, { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <>
      <button onClick={handleClick}>
        Click
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}

export default App;