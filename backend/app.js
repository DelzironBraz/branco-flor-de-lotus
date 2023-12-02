import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDatabase from "./database/db.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

connectDatabase();

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

