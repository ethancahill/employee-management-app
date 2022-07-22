import React, { Component } from "react";

class EditEmployee extends Component {
  constructor(props) {
    super(props);
    
  }

  updateEmployee = (event) => {
    event.preventDefault();
    let employeeId = event.target.employeeId.value;
    let firstName = event.target.firstName.value;
    let lastName = event.target.lastName.value;
    let email = event.target.email.value;
    let phoneNumber = event.target.phoneNumber.value;
    let id = event.target.dataset.id;
    fetch(`/api/employee/${id}`, {method: 'PUT'})
    .then(res => res.json())
    .then(() => {this.props.changePage= false})
    .then(() => this.forceUpdate())
  }
  

  render() {
    return (
      <section>
        <h1>
          Edit {this.props.employee.firstName} {this.props.employee.lastName}
        </h1>
        <form data-id={this.props.employee._id} className="addEmployee" onSubmit={this.updateEmployee}>
          <div>
            <label htmlFor="employeeId">Employee ID:</label>
            <input
              type="text"
              name="employeeId"
              value={this.props.employee.employeeId}
            />
          </div>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={this.props.employee.firstName}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={this.props.employee.lastName}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={this.props.employee.email}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={this.props.employee.phoneNumber}
            />
          </div>
          <button type="submit">Add Employee</button>
        </form>
      </section>
    );
  }
}

export default EditEmployee;
