import React from "react";
import "../../assets/Styles/Navbar/Navbar.css";

function Navbar(props) {
  const { setSelected } = props;

  return (
    <div className="navbar">
      <div className="links">
          <ul>
        <li>
        <span onClick={() => setSelected('')}>Home</span>
        </li>
        <li>
        <span href="/createEmployee" onClick={() => setSelected('create')}>
          Add a New Employee
        </span>
        </li>
        <li>
        <span href="/getEmployees" onClick={() => setSelected('display')}>
          View All Employees
        </span>
        </li>
          </ul>
        
      </div>
    </div>
  );
}

export default Navbar;
