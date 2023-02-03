const express = require("express");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");
const router = express();
const {
  createCMSOrganizer,
  createCMSUser,
  getCMSUsers,
} = require("./controller");

// router.use(authenticateUser);
router.post(
  "/organizers",
  authenticateUser,
  authorizeRoles("owner"),
  createCMSOrganizer
);

router.post(
  "/users",
  authenticateUser,
  authorizeRoles("organizer"),
  createCMSUser
);

router.get("/users", authenticateUser, authorizeRoles("owner"), getCMSUsers);

module.exports = router;
