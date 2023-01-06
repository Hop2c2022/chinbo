const express = require("express");
const {
  userGetController,
  usersDeleteController,
  usersPostController,
  usersUpdateController,
} = require("./UserController");

const UserRouter = express.Router();

UserRouter.get("/user", userGetController)
  .post("/user", usersPostController)
  .delete("/user/:id", usersDeleteController)
  .put("/user/:id", usersUpdateController);
module.exports = UserRouter;
