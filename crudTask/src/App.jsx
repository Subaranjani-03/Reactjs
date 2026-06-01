import { useState } from "react";
import "./App.css";

function App() {
  const [emp, setEmp] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [empList, setEmpList] = useState([]);

  let handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // empList[editIndex] = emp

      // setEmpList(empList);
      // setEditIndex(null);

      const updatedList = empList.map((item, index) =>
        index === editIndex ? emp : item,
      );

      setEmpList(updatedList);
      setEditIndex(null);
    } else {
      setEmpList([...empList, emp]);
    }
    // console.log(emp)

    setEmp({
      name: "",
      email: "",
      role: "",
    });
  };

  // console.log(empList)

  //update
  const [editIndex, setEditIndex] = useState(null);
  let editEmp = (index) => {
    setEmp(empList[index]);
    setEditIndex(index);
  };

  //delete
  let removeEmp = (index) => {
    let removedList = empList.filter((ele, idx) => idx !== index);
    // console.log(removedList)
    setEmpList(removedList);
  };

  return (
    <div className="wrapper">
      <form action="" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <label htmlFor="name">Name :</label>
        <br />
        <input
          type="text"
          onChange={(e) => setEmp({ ...emp, name: e.target.value })}
          value={emp.name}
          required
        />{" "}
        <br />
        <label htmlFor="email">E-Mail Id :</label>
        <br />
        <input
          type="email"
          onChange={(e) => setEmp({ ...emp, email: e.target.value })}
          value={emp.email}
          required
        />{" "}
        <br />
        <label htmlFor="role">Role :</label>
        <br />
        <input
          type="text"
          onChange={(e) => setEmp({ ...emp, role: e.target.value })}
          value={emp.role}
          required
        />{" "}
        <br />
        <button type="submit">submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>SNo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {empList.map((ele, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.email}</td>
              <td>{ele.role}</td>
              <td>
                <button onClick={() => editEmp(idx)}>Update</button>{" "}
                <button onClick={() => removeEmp(idx)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
