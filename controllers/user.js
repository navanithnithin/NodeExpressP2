const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    const allDbUserData = await User.find({});
    return res.json(allDbUserData);
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" })
}

async function handleUpdateUserById(res, res) {
    await User.findByIdAndUpdate(req.params.id, { firstName: "Nithin" });
    return res.json({ status: "Pending" })
}
async function handleDeleteUserById(res, req) {
    await User.findOneAndDelete(req.params.id)
    return res.json({ status: " user deleted successfully" })
}

async function handleCreateNewUser(res, req) {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.gender || !body.email || !body.job_title) {
        return res.status(400).json({ msg: " All fields are required" })
    }
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        gender: body.gender,
        email: body.email,
        jobTitle: body.job_title
    });
    return res.status(201).json({ msg: "Success", id: result._id });

}
module.exports = { handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser }