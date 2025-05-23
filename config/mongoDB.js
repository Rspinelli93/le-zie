const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connection succesfull ✅');
    } catch (error) {
        console.error(error);
        throw new Error('Error connecting to the database ⛔');
    }
};

module.exports = { dbConnection };