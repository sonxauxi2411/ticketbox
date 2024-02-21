const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

//db
const mongoose = require("mongoose");

const app = express();
dotenv.config()
const port = process.env.PORT;

//app user
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));

//router
const routes = require("./app/routes/index");

app.use("/api", routes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongodb connected");
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Error syncing Sequelize models: ", err);
  });
