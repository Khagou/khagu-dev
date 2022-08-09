const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const app = express();
require("./config/db");
const techRoutes = require("./routes/techController");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use("/", techRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server started : ${process.env.PORT}`)
);
