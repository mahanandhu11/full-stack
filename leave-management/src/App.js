import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [leaveType, setLeaveType] = useState("Casual Leave");
  const [days, setDays] = useState("");
  const [reason, setReason] = useState("");

  const [leaves, setLeaves] = useState([]);

  const applyLeave = () => {
    if (name === "" || days === "" || reason === "") {
      alert("Please fill all fields");
      return;
    }

    const newLeave = {
      name,
      leaveType,
      days,
      status: "Pending",
    };

    setLeaves([...leaves, newLeave]);

    alert("Leave Applied Successfully!");

    setName("");
    setLeaveType("Casual Leave");
    setDays("");
    setReason("");
  };

  return (
    <div className="container">
      <div className="card">

        <h1>Leave Management System</h1>

        <label>Employee Name</label>
        <input
          type="text"
          placeholder="Enter Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Leave Type</label>
        <select
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
        >
          <option>Casual Leave</option>
          <option>Medical Leave</option>
        </select>

        <label>Number of Days</label>
        <input
          type="number"
          placeholder="Enter Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />

        <label>Reason</label>
        <textarea
          rows="4"
          placeholder="Enter Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        ></textarea>

        <button onClick={applyLeave}>
          Apply Leave
        </button>

        <hr />

        <h2>Available Leaves</h2>

        <p>Casual Leave : <b>10 Days</b></p>
        <p>Medical Leave : <b>7 Days</b></p>

        <hr />

        <h2>Applied Leaves</h2>

        <table>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Leave Type</th>
              <th>Days</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {leaves.map((leave, index) => (
              <tr key={index}>
                <td>{leave.name}</td>
                <td>{leave.leaveType}</td>
                <td>{leave.days}</td>
                <td>{leave.status}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}

export default App;