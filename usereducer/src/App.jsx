import { useReducer } from "react";
import "./App.css";

function countGen(count, action) {
  // console.log(state , action.category);
  // debugger;
  // console.log(action)

  switch (action.category) { //switch(action)
    case "increment":
      return count + 1;

    case "decrement":
      return count - 1;

    case "reset":
      return 0;

    default:
      return count;
  }
}

function App() {
  // let actions = {
  //   INCREMENT: "incem",
  // };

  // let init = { count: 0 , time: 0 }
  let init = 0;

  const [count, dispatch] = useReducer(countGen, init);
  // Create a state called count
  // Start it at init (0)
  // Use countGen function to update it
  // Give me a function called dispatch to trigger updates

  console.log(count);

  return (
    <>
      <p>count : {count}</p>

      <button onClick={() => dispatch({ category: "increment" })}>  
        {/* dispatch(increment) */}
        Increment
      </button>

      <button onClick={() => dispatch({ category: "decrement" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ category: "reset" })}>Reset</button>
    </>
  );
}

export default App;
