// ANCHOR -- Require Modules --
const express = require("express");
const memberController = require("./../controllers/memberController");

// ANCHOR -- Initialize Member Router --
const router = express.Router();

// ANCHOR -- All Members Route --
router.route("/").get(memberController.getAllMembers);

// ANCHOR -- Member By ID --
// router.route("/:id").get(memberController.getMember);

// ANCHOR -- Export Router --
module.exports = router;
