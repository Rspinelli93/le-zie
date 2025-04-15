require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3210;
const bodyParser = require('body-parser');
const cors = require('cors');   
const productRoutes = require('./routes/productsRoutes');
const adminRoutes = require('./routes/adminRoutes')
const newsletterRoutes = require('./routes/newsletterRoutes');

app.use(cors()); 
app.use(bodyParser.json());  

const { dbConnection } = require('./config/mongoDB');
dbConnection();

app.use(express.json());
app.use('/', adminRoutes)
app.use('/', productRoutes)
app.use('/api', newsletterRoutes);

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT} ✅`)
})