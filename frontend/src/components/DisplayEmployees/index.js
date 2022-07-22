import React, {useState, useEffect, Component, setStatus} from "react";
import App from "../../App";
import "../../assets/Styles/DisplayEmployees/DisplayEmployees.css";

class DisplayEmployees extends Component {
  constructor() {
    super();
    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    fetch('/api/employee')
    .then(res => res.json())
    .then(employees => this.setState({employees}, () => console.log('employees fetched', employees)))
  }

  

  onClick = event => {
    let id = event.target.dataset.id;
    fetch(`/api/employee/${id}`, {method: 'DELETE'})
    .then(() => {
      alert('Delete Successful')
    })
  }


  render() {
  return (
    <>
      <div className="title">
        <h1>Employees</h1>
      </div>
      <section className="employee-display">
        {this.state.employees.map(employee =>
        <div key={employee._id} className="employee">
          <h3>{employee.firstName}<span className="lastname"> {employee.lastName}</span></h3>
          <div className="employee-datas">
            <div className="employee-data">Employee ID: {employee.employeeId}</div>
            <a className="employee-data"  onClick={(e) => {
                window.location = `mailto:${employee.email}`
            }}>{employee.email}</a>
            <div className="employee-data">{employee.phoneNumber}</div>
          </div>
          <button id="edit-button">Edit Employee</button>
          <button id="delete-button" data-id={employee._id} onClick={this.onClick}>Delete Employee</button>
        </div>
        )}
      </section>
    </>
  );
  }
}

export default DisplayEmployees;
