const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// //Static files
// app.use(express.static('public'));

// //Template Engine
// app.use(expressEjsLayouts);
// app.set('layout', './layouts/main');
// app.set('view engine', 'ejs');

app.listen(PORT, () => {
    try {
        console.info(`Server is listening on port http://localhost:${PORT}`);
    } catch (error) {
        console.error(error);
    }
})

