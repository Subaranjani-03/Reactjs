import { useState } from "react";
import "./App.css";

function App() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [empList, setEmpList] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  let handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      let updatedList = empList.map((ele, idx) =>
        idx === editIndex ? details : ele,
      );
      // console.log(updatedList)
      setEmpList(updatedList);
      setEditIndex(null);
    } else {
      setEmpList([...empList, details]);
    }

    setDetails({
      name: "",
      email: "",
      role: "",
    });
  };

  console.log(empList);

  //update
  let updateEmp = (index) => {
    setDetails(empList[index]);
    setEditIndex(index);
  };

  //delete
  let deleteEmp = (idx) => {
    let deletedList = empList.filter((_, index) => idx !== index);
    // console.log(deletedList)
    setEmpList(deletedList);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
          required
        />
        <label htmlFor="email">E-Mail :</label>
        <input
          type="email"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
          required
        />{" "}
        <label htmlFor="role">Role :</label>
        <select
          name="role"
          onChange={(e) => setDetails({ ...details, role: e.target.value })}
          value={details.role}
          required
        >
          <option value="">select Role</option>
          <option value="Web Developer">Web Developer</option>
          <option value="Designer">Designer</option>
        </select>
        <button type="submit">
          {editIndex === null ? "Submit" : "Update"}
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {empList.length > 0 ? (
            empList.map((ele, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.role}</td>
                <td>
                  <button onClick={() => updateEmp(idx)}>Update</button>{" "}
                  <button onClick={() => deleteEmp(idx)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No Records Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
