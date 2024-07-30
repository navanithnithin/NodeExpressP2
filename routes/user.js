const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById,
    handleCreateNewUser
} = require("../controllers/user");

router.get('/', handleGetAllUsers).post('/', handleCreateNewUser)
router.get('/:id',);

router.route('/:id')
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)

module.exports = router;