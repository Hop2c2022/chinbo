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
// const { authorizer } = require("./authorization/authorization");
const UserRouter = express.Router();

UserRouter.get("/user", TokenCheckerMiddleware, userGetController)

  // authorizer({ type: "user" })
  .post("/user", usersPostController)
  .delete("/user/:id", usersDeleteController)
  .put("/user/:id", usersUpdateController)
  .post("/login", userLogin);
module.exports = UserRouter;
