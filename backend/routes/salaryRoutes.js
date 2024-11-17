const express = require("express");
const router = express.Router();
const Salary = require("../models/Salary");

// Add a new salary record
router.post("/", async (req, res) => {
    const { name, salary, experience, designation } = req.body;
    const newSalary = new Salary({ name, salary, experience, designation });

    try {
        await newSalary.save();
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Get all salary records
router.get("/", async (req, res) => {
    try {
        const salaries = await Salary.find();
        res.json(salaries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a salary record by ID
router.delete("/:id", async (req, res) => {
    try {
        await Salary.findByIdAndDelete(req.params.id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
