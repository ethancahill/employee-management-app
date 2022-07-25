const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use(require('./routes'));
app.use(express.static(path.join(__dirname, './client/build')));

mongoose.connect(process.env.MONGODB_URI ||'mongodb://127.0.0.1:27017/employee-database');

// Use this to log mongo queries being executed
mongoose.set('debug', true)

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));


