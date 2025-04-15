require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
        const ADMIN_HASHED_PASSWORD = process.env.ADMIN_PASSWORD;
        const SECRET_KEY = process.env.JWT_SECRET;

        if (email !== ADMIN_EMAIL) {
            return res.status(401).json({ message: "Unauthorized: Invalid email 😖" });
        }

        const isPasswordValid = await bcrypt.compare(password, ADMIN_HASHED_PASSWORD);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Unauthorized: Invalid password 😖" });
        }

        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
        return res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getAdmin };

