const http = require('http');
const fs = require('fs');
const inquirer = require('inquirer');
const express = require('express');
const app = express();
const PORT = 3006;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});