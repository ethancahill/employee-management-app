var seeder = require("mongoose-seed");

// Connect to MongoDB via Mongoose
seeder.connect("mongodb://127.0.0.1:27017/employee-database", function () {
  // Load Mongoose models
  seeder.loadModels(["./models/index.js"]);

  // Clear specified collections
  seeder.clearModels(["Employee"], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });
  });
});

var data = [
  {
    model: "Employee",
    documents: [
      {
        employeeId: 2445,
        firstName: "Ethan",
        lastName: "Cahill",
        email: "mail@mail.com",
        phoneNumber: '555-555-5555'
      },
      {
        employeeId: 2431,
        firstName: "Joe",
        lastName: "Guy",
        email: "guy@mail.com",
        phoneNumber: '555-545-5555',
      },
      {
        employeeId: 1235,
        firstName: "Bill",
        lastName: "Keele",
        email: "keele@mail.com",
        phoneNumber: '525-555-5555',
      },
      {
        employeeId: 6078,
        firstName: "Corey",
        lastName: "Long",
        email: "long@mail.com",
        phoneNumber: '545-555-5555',
      },
    ],
  },
];
