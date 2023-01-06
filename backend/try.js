const express = require("express");
const UserRouter = require("./UserRouter");
const { connectDatabase } = require("./Database/database");
const cors = require("cors");
const port = 8000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(UserRouter);

const startServer = async () => {
  await connectDatabase();
  app.listen(port, () => {
    console.log(`server is running at localhost:${port}`);
  });
};
startServer();
