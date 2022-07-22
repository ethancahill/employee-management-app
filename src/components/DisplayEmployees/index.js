import React from "react";
import "../../assets/Styles/DisplayEmployees/DisplayEmployees.css"

function DisplayEmployees() {
    return(
        <>
        <div className="title">
            <h1>Employees</h1>
        </div>
        <section className="employee-display">
        <div className="employee">
            <h3>Employee Name</h3>
            <div className="employee-id">
                Employee ID
            </div>
            <div className="email-address">
                Email Address
            </div>
            <div className="phone-number">
                Phone Number
            </div>
            <button id="edit-button">Edit Employee</button>
            <button id="delete-button">Delete Employee</button>
        </div>
        </section>
        </>
    )
}

export default DisplayEmployees