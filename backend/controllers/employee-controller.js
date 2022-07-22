const { Employee } = require('../models');

const employeeController = {
    getAllEmployees(req,res) {
        Employee.find({})
        .select("-__v")
        .sort({ _id: -1 })
        .then((dbEmployeeData) => res.json(dbEmployeeData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    getEmployeeById({ body }, res) {
        Employee.findOne({ _id: body.id })
        .select("-__v")
        .then((dbEmployeeData) => {
            if(!dbEmployeeData){
                res.status(404).json({ message: "no employee found with this id" })
                return;
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err)
        });
    },

    createEmployee({ body }, res) {
        Employee.create(body)
        .then((dbEmployeeData) => res.json(dbEmployeeData))
        .catch((err) => res.status(400).json(err));
    },

    updateEmployee({ body }, res) {
        Employee.findOneAndUpdate({ _id: body.id }, body, {
            new: true,
            runValidators: true,
        })
        .then((dbEmployeeData) => {
            if(!dbEmployeeData) {
                res.status(404).json({ message: "no employee found with this id" })
                return;
            }
            res.json(dbEmployeeData);
        })
        .catch((err) => res.status(400).json(err));
    },

    deleteEmployee({ body }, res) {
        Employee.findOneAndDelete({ _id: body.id })
        .then((dbEmployeeData) => {
            if(!dbEmployeeData) {
                res.status(404).json({ message: "no employee found with this id" })
                return;
            }
            res.json(dbEmployeeData)
        })
    },
}