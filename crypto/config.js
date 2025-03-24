require('dotenv').config();
const bcrypt = require('bcrypt');

const secret = process.env.JWT_SECRET;

if (!secret) {
    throw new Error("JWT_SECRET is missing from .env file!");
}
const hashedSecret = bcrypt.hashSync(secret, 10);

module.exports = { hashedSecret, secret };
