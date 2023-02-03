const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");
const {
  create,
  find,
  update,
  destroy,
  index,
  changeStatus,
} = require("./controller");

router.get("/events", authenticateUser, authorizeRoles("organizer"), index);
router.get("/events/:id", authenticateUser, authorizeRoles("organizer"), find);
router.put(
  "/events/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  update
);
router.delete(
  "/events/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  destroy
);
router.post("/events", authenticateUser, authorizeRoles("organizer"), create);
router.put(
  "/events/:id/status",
  authenticateUser,
  authorizeRoles("organizer", "admin"),
  changeStatus
);

module.exports = router;
