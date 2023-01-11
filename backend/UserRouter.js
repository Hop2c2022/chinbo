const express = require("express");
const {
  userGetController,
  usersDeleteController,
  usersPostController,
  usersUpdateController,
  getuserbyemail,
  userLogin,
} = require("./UserController");
const { TokenCheckerMiddleware } = require("./middleware");
const UserRouter = express.Router();

UserRouter.get("/user", TokenCheckerMiddleware, userGetController)
  .get("/login/:email", getuserbyemail)
  .post("/user", usersPostController)
  .delete("/user/:id", usersDeleteController)
  .put("/user/:id", usersUpdateController)
  .post("/login", userLogin);
module.exports = UserRouter;
