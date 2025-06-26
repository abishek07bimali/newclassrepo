const User = require('../model/user')
const bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require('jsonwebtoken');


const createUsers = async (req, res) => {
    console.log(req.body)

    console.log(req.files?.length ? req.files[0].path : null)

    try {
        // JOI VALIDATION
        const { userName, email, password } = req.body;
        if (!userName || !email || !password) {
            return res.json({ success: false, message: "please enter al fields!!" })
        }
        const image = req.files?.length ? req.files[0].path : null;
        const userExist = await User.findOne({ where: { username: userName } });
        if (userExist) {
            return res.json({ message: "user already exist use different username " })
        }
        const emailExist = await User.findOne({ where: { email: email } });
        if (emailExist) {
            return res.json({ message: "user already exist use different email " })
        }
        const salt = await bcrypt.genSalt(10);
        const newpassword = await bcrypt.hash(password, salt)
        const newuser = await User.create({
            username: userName, email, password: newpassword, image
        });
        return res.status(201).json({ success: true, newuser, message: "user created !!" });
    } catch (error) {
        return res.status(400).json({ error: error });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({ attributes: { exclude: ['password'] } });
        return res.json({ success: true, users: users });
    } catch (error) {
        return res.status(500).json({ error: "Error fetching users" });
    }
};


// const sanitizedUsers = users.map(user => {
//     const userObj = user.toJSON();
//     delete userObj.password;
//     return userObj;
// });



const deleteUsers = async (req, res) => {
    const userId = req.params.id;
    try {
        const userExist = await User.findByPk(userId);
        if (userExist) {
            const deleteUser = await User.destroy(
                { where: { id: userId } });
            return res.json({
                success: true,
                message: "User deleted", deleteUser
            })
        } else {
            return res.json({ success: false, message: "user not found" })
        }
    } catch (error) {
        res.json({ error: error })
    }
};


const findUserById = async (req, res) => {
    const userId = req.body.id;
    try {
        const userExist = await User.findOne({ where: { id: userId } });
        if (userExist) {
            return res.json({ userExist: { id: userExist.id } })
        } else {
            res.json({ message: "User not found!" })
        }
    } catch (error) {

    }
}

const findByid = async (req, res) => {
    try {
        // res.json({user:await User.findByPk(req.body.id)})
        res.json({ user: await User.findOne({ id: req.body.id }) })

    }
    catch (error) {
        res.json({ message: "" })
    }
}

const updateUser = async (req, res) => {
    const userId = req.user.id;
    try {
        const userExist = await User.findByPk(userId);
        if (userExist) {
            console.log("user exist")
            const { username, email, password } = req.body;

            const image = req.files?.length ? req.files[0].path : userExist.image;

            let newpassword = userExist.password;
            if (password) {
                const salt = await bcrypt.genSalt(10);
                newpassword = await bcrypt.hash(password, salt);
            }

            const updateduser = await User.update(
                { username, password: newpassword, email, image },
                { where: { id: userId } });
            return res.status(201).json({
                success: true,
                message: "user updated!!", updateduser
            });
        }
        else {
            return res.json({ message: "user donot exist" })
        }
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

const updateUserBySelf = async (req, res) => {
    const userId = req.user.id;
    try {
        const userExist = await User.findByPk(userId);
        if (userExist) {
            console.log("user exist")
            const { username, email, password } = req.body;
            let newpassword = userExist.password;
            if (password) {
                const salt = await bcrypt.genSalt(10);
                newpassword = await bcrypt.hash(password, salt);
            }
            const updateduser = await User.update(
                { username, password: newpassword, email },
                { where: { id: userId } });
            return res.status(201).json({
                success: true,
                message: "user updated!!", updateduser
            });
        }
        else {
            return res.json({ message: "user donot exist" })
        }
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

const loginUser = async (req, res) => {
    console.log(req.body)

    try {
        const { email, password } = req.body;
        if(!email || !password) return res.status(404).json({ success: false, message: 'enter all fields' })
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
        console.log("debug")
        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            process.env.JWT_TOKEN,
            { expiresIn: '24h' }
        );
        return res.json({
            success: true, message: 'Login successful', token, user: {
                id: user.id,
                username: user.username,
                email: user.email,
            }
        });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

module.exports = {
    createUsers, updateUser, updateUserBySelf, deleteUsers, getAllUsers, findUserById, loginUser
}