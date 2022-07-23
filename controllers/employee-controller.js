const { Employee } = require("../models");

const employeeController = {
  getAllEmployees(req, res) {
    Employee.find({})
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbEmployeeData) => res.json(dbEmployeeData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  getEmployeeById({ params }, res) {
    Employee.findOne({ _id: params.id })
      .select("-__v")
      .then((dbEmployeeData) => {
        if (!dbEmployeeData) {
          res.status(404).json({ message: "no employee found with this id" });
          return;
        }
        res.json(dbEmployeeData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  createEmployee({ body }, res) {
    Employee.create(body)
      .then((dbEmployeeData) => res.json(dbEmployeeData))
      .catch((err) => res.status(400).json(err));
  },

  updateEmployee({ params, body }, res) {
    Employee.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbEmployeeData) => {
        dbEmployeeData
          .save()
          .then((saved) => {
            res.json(saved);
          })
          .catch((err) => {
            res.status(422).json(err);
          });
      })
      .catch((err) => res.status(400).json(err));
  },

  deleteEmployee({ params }, res) {
    Employee.findOneAndDelete({ _id: params.id }).then((dbEmployeeData) => {
      if (!dbEmployeeData) {
        res.status(404).json({ message: "no employee found with this id" });
        return;
      }
      res.json(dbEmployeeData);
    });
  },
};

module.exports = employeeController;
