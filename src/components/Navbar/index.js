import React from "react";
import "../../assets/Styles/Navbar/Navbar.css";

function Navbar(props) {
  const { addSelected, setAddSelected } = props;

  return (
    <div className="navbar">
      <div className="links">
          <ul>
        <li>
        <span onClick={() => setAddSelected('')}>Home</span>
        </li>
        <li>
        <span href="/createEmployee" onClick={() => setAddSelected('create')}>
          Add a New Employee
        </span>
        </li>
        <li>
        <span href="/getEmployees" onClick={() => setAddSelected('display')}>
          View All Employees
        </span>
        </li>
          </ul>
        
      </div>
    </div>
  );
}

export default Navbar;
