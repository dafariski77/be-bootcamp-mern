const express = require("express");
const { authenticateUser, authorizeRoles } = require("../../../middlewares/auth");
const router = express();

const { create, index, find, update, destroy } = require("./controller");

// router.use(authenticateUser);

router.get("/categories", authenticateUser, authorizeRoles("organizer"), index);
router.get("/categories/:id", authenticateUser, authorizeRoles("organizer"), find);
router.put("/categories/:id", authenticateUser, authorizeRoles("organizer"), update);
router.delete("/categories/:id", authenticateUser, authorizeRoles("organizer"), destroy);
router.post("/categories", authenticateUser, authorizeRoles("organizer"), create);

module.exports = router;
