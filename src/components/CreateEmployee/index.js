import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "../../assets/Styles/CreateEmployee/createEmployee.css";

function CreateEmployee() {
  const [formState, setFormState] = useState({
    employeeID: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const { employeeID, firstName, lastName, email, phoneNumber } = formState;

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(
          `${e.target.name
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, function (str) {
              return str.toUpperCase();
            })} is required`
        );
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1>Add a New Employee</h1>
      <form className="addEmployee" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="employeeId">Employee ID:</label>
          <input
            type="text"
            name="employeeId"
            defaultValue={employeeID}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            defaultValue={firstName}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            defaultValue={lastName}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="number"
            name="phoneNumber"
            defaultValue={phoneNumber}
            onBlur={handleChange}
          />
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </section>
  );
}

export default CreateEmployee;
