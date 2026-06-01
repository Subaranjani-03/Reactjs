import React, { useReducer, useState } from "react";

const initialState = []

function reducer(state, action) {

  console.log(action);

  switch (action.type) {
    case "ADD_USER":
      return  [...state, action.payload]
      

    case "DELETE_USER":
      return state.filter((user) => user.id !== action.payload)
 

    case "UPDATE_USER":
      return  state.map((user) =>
          user.id === action.payload.id
            ? { ...user, name: action.payload.name } //takes only matched id's object alone in ...user
            : user //else is not given - updates only matched id and remaining will be undefined
        )
     
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (!name.trim()) return; 

    if (editId) {
      dispatch({
        type: "UPDATE_USER",
        payload: {
          id: editId,
          name: name
        }
      });
      setEditId(null);
    } else {
      dispatch({
        type: "ADD_USER",
        payload: {
          id: Date.now(),
          name: name
        }
      });
    }

    setName("");
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEditId(user.id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>useReducer CRUD Example</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editId ? "Update" : "Add"}
      </button>

      <ul>
        {state.map((user) => (  
          <li key={user.id}>
            {user.name}

            <button onClick={() => handleEdit(user)}>
              Edit
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_USER",
                  payload: user.id
                })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}