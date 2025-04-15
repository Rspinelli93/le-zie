const jwt = require('jsonwebtoken');

const authenticateAdmin = (req, res, next) => {
    let token = req.header("Authorization");

    if (token && token.startsWith("Bearer ")) {
        token = token.split(" ")[1];
    } else {
        token = req.query.token;
    }

    if (!token) {
        return res.status(403).json({ message: "Access denied. No token provided 🔑" });
    }
    try {
        const SECRET_KEY = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, SECRET_KEY);
        req.admin = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token 🔑" });
    }
};

module.exports = authenticateAdmin;
