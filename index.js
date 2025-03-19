const express = require('express');
const app = express();
const PORT = 3210;
const productRoutes = require('./routes/productsRoutes');
const adminRoutes = require('./routes/adminRoutes')

const { dbConnection } = require('./config/mongoDB');
dbConnection();

app.use(express.json());
app.use('/', adminRoutes)
app.use('/', productRoutes)

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT} ✅`)
})