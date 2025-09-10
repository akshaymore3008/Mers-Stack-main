const express = require('express');
const { createUser, getUsers, updateUser, deletUser } = require('../controllers/user.controllera');

const router = express.Router();

router.get("/get-all-user", getUsers)
router.post("/create-user", createUser)
router.put("/update-user", updateUser)
router.delete("/delete-user", deletUser)

module.exports = router;
