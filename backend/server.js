const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
require('./db/db');
const user = require('./routes/userRoute');
const product = require('./routes/productRoute');
const order = require('./routes/orderRoute');

const PORT = process.env.PORT || 5000;

app.get('', (req,res)=>{
    res.json('backend server running')
})

app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

app.use('/api/user', user);
app.use('/api/product', product);
app.use('/api/order', order);

app.listen(PORT, ()=>{
    console.log(`server is running on port : ${PORT}`)
})
