import React, {useState, useEffect, Component, setStatus} from "react";
import App from "../../App";
import "../../assets/Styles/DisplayEmployees/DisplayEmployees.css";
import EditEmployee from '../EditEmployee'

class DisplayEmployees extends Component {
  constructor() {
    super();
    this.state = {employees: [], employee: null, changePage: false };
    // this.editPage = this.editPage.bind(this);
  }


  componentDidMount() {
    fetch('http://localhost:3001/api/employee')
    .then(res => res.json())
    .then(employees => this.setState({employees}, () => console.log('employees fetched', employees)))
  }

 

  clickDelete = event => {
    let id = event.target.dataset.id;
    fetch(`http://localhost:3001/api/employee/${id}`, {method: 'DELETE'})
    .then(() => {
      alert('Delete Successful')
    })
  }



editEmployee = event => {
  let id = event.target.dataset.id;
  fetch(`http://localhost:3001/api/employee/${id}`, {method: 'GET'})
  .then(res => res.json())
  .then(employee => {
    this.setState({employee}, () => {
      return console.log('employee selected', employee);
    })
  })
  .then(() => this.setState({changePage: true}, () => {
    console.log('page change set to true')
  }))
  .then(() => this.forceUpdate())
}



  render() {
  return (
    <>
    {this.state.changePage ? <EditEmployee 
    employee={this.state.employee}
    changePage={this.state.changePage}
    /> : null}
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
          <button id="edit-button" data-id={employee._id} onClick={this.editEmployee}>Edit Employee</button>
          <button id="delete-button" data-id={employee._id} onClick={this.clickDelete}>Delete Employee</button>
        </div>
        )}
      </section>
    </>
  );
  }
}

export default DisplayEmployees;
