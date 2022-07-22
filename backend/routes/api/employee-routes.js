const router = require('express').Router;
const {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
} = require('../../controllers/employee-controller');

router
    .route('/')
    .get(getAllEmployees)
    .post(createEmployee);

router
    .route('/one')
    .get(getEmployeeById)
    .put(updateEmployee)
    .delete(deleteEmployee);

module.exports = router;