import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDatabase from "./database/db.js";
import authRoute from "./server/routes/auth.route.js";
import userRoute from "./server/routes/user.route.js";
import taskRoute from "./server/routes/task.route.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

// //Static files
// app.use(express.static('public'));

// //Template Engine
// app.use(expressEjsLayouts);
// app.set('layout', './layouts/main');
// app.set('view engine', 'ejs');

connectDatabase();

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/task", taskRoute);

app.listen(PORT, () => {
  try {
    console.info(`Server is listening on port http://localhost:${PORT}`);
  } catch (error) {
    console.error(error);
  }
});
