const express = require("express");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");
const { index, find, update, destroy, create } = require("./controller");
const router = express();

router.get("/payments", authenticateUser, authorizeRoles("organizer"), index);
router.get(
  "/payments/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  find
);
router.put(
  "/payments/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  update
);
router.delete(
  "/payments/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  destroy
);
router.post("/payments", authenticateUser, authorizeRoles("organizer"), create);

module.exports = router;
