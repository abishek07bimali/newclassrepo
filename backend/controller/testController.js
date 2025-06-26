const createUsers = async (req, res) => {
    console.log(req.body)
    return res.send("user created");
};
const updateUsers = async (req, res) => {
    console.log(req.params.uid)
    console.log(req.body)
    return res.send("user updated");
};
const deleteUsers = async (req, res) => {
    console.log(req.body)
    return res.send("user deleted");
};

module.exports={createUsers,updateUsers,deleteUsers}