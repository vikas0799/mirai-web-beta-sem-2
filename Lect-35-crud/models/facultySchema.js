const mongoose = require("mongoose")


    const facultySchema = new mongoose.Schema({
        name: String,
        age: Number,
        salary : Number,
        email: String,
        leave : Number
    });

    module.exports = mongoose.model("facultyModel",facultySchema);
