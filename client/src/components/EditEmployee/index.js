import React, { Component } from "react";
import "../../assets/Styles/EditEmployee/EditEmployee.css";

class EditEmployee extends Component {
  constructor() {
    super();
    
  }

  componentWillMount(){
      this.setState({
        updatable : false,
        employeeId: this.props.employee.employeeId,
        firstName: this.props.employee.firstName,
        lastName: this.props.employee.lastName,
        email: this.props.employee.email,
        phoneNumber: this.props.employee.phoneNumber
      })
  };

  changeEmployeeId(value){
    this.setState({
         employeeId: value
    });
}
changeFirstName(value){
    this.setState({
         firstName: value
    });
}
changeLastName(value){
    this.setState({
         lastName: value
    });
}
changeEmail(value){
    this.setState({
         email: value
    });
    console.log(this.state.email)
}
changeNumber(value){
    this.setState({
         phoneNumber: value
    });
}

  updateEmployee = (event) => {
    event.preventDefault();
    let newEmployeeId = this.state.employeeId;
    let newFirstName = this.state.firstName;
    let newLastName = this.state.lastName;
    let newEmail = this.state.email;
    let newPhoneNumber = this.state.phoneNumber;
    let id = event.target.dataset.id;
    fetch(`http://localhost:3001/api/employee/${id}`, {
    method: 'PUT', 
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
        employeeId: newEmployeeId,
        firstName: newFirstName,
        lastName: newLastName,
        email: newEmail,
        phoneNumber: newPhoneNumber
    })
  }).then(res => {
        if (res.ok) { console.log("HTTP request successful") }
        else { console.log("HTTP request unsuccessful") }
        return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .then(() => window.location.reload(false))
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
              value={this.state.employeeId}
    onChange={e => this.changeEmployeeId(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={e => this.changeFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={e => this.changeLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={e => this.changeEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={e => this.changeNumber(e.target.value)}
            />
          </div>
          <button type="submit">Update Employee</button>
        </form>
      </section>
    );
  }
}

export default EditEmployee;
