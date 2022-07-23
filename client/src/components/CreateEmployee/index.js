import React, { Component } from "react";
import "../../assets/Styles/CreateEmployee/createEmployee.css";

class CreateEmployee extends Component {
  constructor() {
    super();
    this.state = {
      employeeId: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    };
  }

  changeEmployeeId(value) {
    this.setState({
      employeeId: value,
    });
  }
  changeFirstName(value) {
    this.setState({
      firstName: value,
    });
  }
  changeLastName(value) {
    this.setState({
      lastName: value,
    });
  }
  changeEmail(value) {
    this.setState({
      email: value,
    });
    console.log(this.state.email);
  }
  changeNumber(value) {
    this.setState({
      phoneNumber: value,
    });
  }



  postEmployee = event => {
    event.preventDefault();
    let newEmployeeId = this.state.employeeId;
    let newFirstName = this.state.firstName;
    let newLastName = this.state.lastName;
    let newEmail = this.state.email;
    let newPhoneNumber = this.state.phoneNumber;
    fetch(`http://localhost:3001/api/employee`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        employeeId: newEmployeeId,
        firstName: newFirstName,
        lastName: newLastName,
        email: newEmail,
        phoneNumber: newPhoneNumber
      }),
    }).then((res) => res.json())
    .then(data => console.log(data))
    .then(()=> window.location.reload(false))
  }
  render() {
    return (
      <section>
        <h1>Add a New Employee</h1>
        <form className="addEmployee" onSubmit={this.postEmployee}>
          <div>
            <label htmlFor="employeeId">Employee ID:</label>
            <input
              type="text"
              name="employeeId"
              value={this.state.employeeId}
              onChange={(e) => this.changeEmployeeId(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={(e) => this.changeFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={(e) => this.changeLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={(e) => this.changeEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={(e) => this.changeNumber(e.target.value)}
            />
          </div>
          <button type="submit">Add Employee</button>
        </form>
      </section>
    );
  }
}

export default CreateEmployee;
