import { useState } from "react";
import "./App.css";

function App() {
  const [details, setDetails] = useState({
    name: "",
    role: "",
    email: "",
  });

  const [detailsList, setDetailsList] = useState([]);

  let handleSubmit = (e) => {
    e.preventDefault();

    if(editIndex !== null){
      //update
      let newList = detailsList.map((ele,index) => 
        index === editIndex ? details : ele
      )
      setDetailsList(newList)
      setEditIndex(null)

    }else{
      //add new records
      setDetailsList([...detailsList, details]);
    }

    setDetails({
      name: "",
      role: "",
      email: "",
    });
  };

  console.log(detailsList);

  //update
  const[editIndex, setEditIndex] = useState(null)

  let updateList = (idx) =>{
    setDetails(detailsList[idx]) //refill form
    setEditIndex(idx) //sets that index to setEditIndex
  }


  //delete
  let deleteList = (idx) => {
    let afterDelete = detailsList.filter((_,index) => idx !== index)
    setDetailsList(afterDelete)
  }


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
          required
        />{" "}
        <br />
        <label htmlFor="role">Role</label>
        <br />
        <select
          name="role"
          onChange={(e) => setDetails({ ...details, role: e.target.value })}
          value={details.role}
          required
        >
          <option value="">select</option>
          <option value="abc">abc</option>
          <option value="cde">cde</option>
        </select>
        <br />
        <label htmlFor="email">email</label>
        <br />
        <input
          type="email"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
          required
        />{" "}
        <br />
        <br />
        <button type="submit">{editIndex !== null ? 'update' : 'submit'}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>sno</th>
            <th>name</th>
            <th>role</th>
            <th>email</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {detailsList && detailsList.length > 0 ? ( detailsList.map((ele,idx) => (
          <tr key={idx}>
            <td>{idx+1}</td>
            <td>{ele.name}</td>
            <td>{ele.role}</td>
            <td>{ele.email}</td>
            <td><button onClick={ ()=> updateList(idx)}>update</button> <button onClick={() => deleteList(idx)}>delete</button></td>
          </tr>
          ))) : (
            <tr>
              <td colSpan={5}>no records found</td>
            </tr>
          )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
