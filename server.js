const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const fs = require('fs');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// routes for api&html
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// define express routes to subfolders
app.use(express.static('public'));

const { animals } = require('./data/animals.json')


app.listen(PORT, () =>{
    console.log('listening on 3001')
});