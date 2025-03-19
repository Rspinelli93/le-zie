const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema(
    {
        email: { 
            type: String, 
            required: true, 
            unique: true, 
            lowercase: true, 
            trim: true,
            match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
        },
        password: { 
            type: String, 
            required: true,
            minlength: 8 
        }
    },
    { timestamps: true }
);

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin;