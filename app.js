const express = require("express");
const app = express();
const path = require("path");
const { env } = require("./lib/config/server");
const connectDB = require("./lib/config/db/mongo");
const mainRouter = require("./lib/routes/routesMater");

app.use(express.json());

// Routes
app.use("/api/v1/", mainRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

connectDB();

app.listen(env.API_PORT, () => {
  console.log(`Server started at ${env.API_PORT}`);
});
