const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema({
    name: { type: String, required: true },
    salary: { type: Number, required: true },
    experience: { type: Number, required: true },
    designation: { type: String, required: true }
});

module.exports = mongoose.model("Salary", salarySchema);
