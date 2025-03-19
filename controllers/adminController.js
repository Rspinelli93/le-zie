const Admin = require("../models/Admin"); 
const mongoose = require("mongoose");

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await Admin.create({ email, password })

    } catch (error) {
        
    }
}
const logout = async (req, res) => {
    
}
const register = async (req, res) => {
        const { email, password } = req.body;
    try {
        const admin = await Admin.create({ email, password })
        res.status(201).json(admin);
    } catch (error) {
        console.log(error)
        res.status(400).send('Error, user not created')
    }
}

module.exports = {
    login,
    logout,
    register
}