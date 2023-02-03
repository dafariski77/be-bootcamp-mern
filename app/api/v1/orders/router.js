const express = require("express");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");
const router = express();
const { index } = require("./controller");

router.get(
  "/orders",
  authenticateUser,
  authorizeRoles("organizer", "admin", "owner"),
  index
);

module.exports = router;
