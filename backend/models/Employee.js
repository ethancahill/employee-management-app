const { Schema, model } = require('mongoose');
const {validateEmail, validatePhoneNumber} = require('../utils/helpers');

const employeeSchema = new Schema (
    {
       employeeId: {
           type: Number,
           unique: true,
           required: "you must have an employee id",
           trim: true
       },
       firstName: {
           type: String,
           required: "you must enter a first name",
           trim: true
       },
       lastName: {
           type: String,
           required: "you must include a last name",
           trim: true
       },
       email: {
           type: String,
           unique: true,
           lowercase: true,
           required: "you must enter an email address",
           validate: [validateEmail, "Please input a valid email address"],
       },
       phoneNumber: {
           type: Number,
           unique: true,
           required: "you must enter a phone number",
        validate: [validatePhoneNumber, "Please input a valid phone number"],
           trim: true
       }
    }
);

const Employee = model("Employee", employeeSchema);

module.exports = Employee