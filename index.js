const express = require('express');
const app = express();
const connectDB = require('./config/db');


// connect to db
connectDB();

app.use(express.json({extended: false}));

const PORT = 5000;

app.listen(5000, () => {
    console.log("Server Started at "+PORT);    
});

//Define routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));





