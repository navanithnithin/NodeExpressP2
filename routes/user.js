const express = require("express");
const router = express.Router();


router.get('/', async (req, res) => {
    const allDbUserData = await User.find({})
    return res.json(allDbUserData);
});

router.route('/').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})
    .patch(async (req, res) => {
        await User.findByIdAndUpdate(req.params.id, { firstName: "Nithin" });
        return res.json({ status: "Pending" })
    })
    .delete(async (req, res) => {
        await User.findOneAndDelete(req.params.id)

        return res.json({ status: " user deleted successfully" })
    })

router.post('/', async (req, res) => {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.gender || !body.email || !body.job_title) {
        return res.status(400).json({ msg: " All fields are required" })
    }
    // console.log("Body ", body);
    // users.push({ ...body, id: users.length + 1 });
    // fs.writeFile('./MOCK_DATA (1).json', JSON.stringify(users), (err, data) => {
    //     return res.json({ status: "Success" })
    // });
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        gender: body.gender,
        email: body.email,
        jobTitle: body.job_title
    });

    return res.status(201).json({ msg: "Success" });

});

module.exports = router;