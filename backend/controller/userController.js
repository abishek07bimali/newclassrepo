const User = require("../model/user");
const Order = require("../model/order");
const Address = require("../model/address");
const Products = require("../model/product");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json({ success: true, users: users });
    } catch (error) {
        res.status(500).json({ error: "Error fetching users" });
    }
};




const createUser = async (req, res) => {
    console.log(req.body)
    console.log(req.body)
    // console.log(req.files)
    try {
        const { username, email, password } = req.body;

        // password encryption
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({ username, email, password: hashedPassword });
        res.status(201).json({ success: true, newUser: newUser, message:"user created" });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};


const loginUser = async (req, res) => {
    console.log(req.body)
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
        const token = jwt.sign(
            { id: user.id, email: user.email,role: user.role },
            process.env.JWT_TOKEN,
            { expiresIn: '24h' }
        );

        return res.status(200).json({
            success: true, message: 'Login successful', token, user: {
                id: user.id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};





const updateUser = async (req, res) => {
    console.log(req.params.id)
    const userId = req.params.id;
    try {
        const userExist = User.findByPk(userId);
        if (userExist) {
            console.log("user exist")
            const { username } = req.body;
            const updateduser = await User.update({ username: username }, { where: { id: userId } });
            res.status(201).json({ updateduser });
        }
        else {
            console.log("user donot exist")
        }
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

const deleteUser = async (req, res) => {
    console.log(req.params.id)
    const userId = req.params.id;
    try {
        const userExist = User.findByPk(userId)
        if (userExist) {
            User.destroy({ where: { id: userId } })
            return res.status(201).json("user deleted");
        }
        return res.json("user cannot be deleted")

    }
    catch {
        console.log("failed")
    }
}





const createOrder = async (req, res) => {
    try {
        const { userId, totalAmount } = req.body;

        if (!userId || !totalAmount) {
            return res.status(400).json({ error: "userId and totalAmount are required." });
        }

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }

        const newOrder = await Order.create({ userId, totalAmount });

        res.status(201).json({ message: "Order created successfully.", order: newOrder });
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const createAddress = async (req, res) => {
    try {
        const { userId, address } = req.body;

        if (!userId || !address) {
            return res.status(400).json({ error: "userId and address are required." });
        }

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }
        const addressExist = await Address.findOne({ where: { userId } })
        console.log(addressExist)
        if (!addressExist) {
            const newAddress = await Address.create({ userId, address });
            return res.status(201).json({ message: "Address created successfully.", address: newAddress });

        }
        return res.status(500).json({ error: "dublicate entries not allowed" });


    } catch (error) {
        console.error("Error creating Address:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Products.findAll();
        res.json({ success: true, products: products });
    } catch (error) {
        res.status(500).json({ error: "Error fetching products" });
    }
};


// const updateUser = async (req, res) => {
//     console.log(req.params.id)
//     try {
//         const userExist = User.findByPk(req.params.id);
//         if (userExist) {
//             console.log("user exists");

//             const { username } = req.body;
//             try {
//                 const updatedUser = await User.update({ username: username }, { where: { id: req.params.id } });
//                 if (updatedUser[0] === 0) {
//                     return res.status(404).json({ message: "User not found or no changes were made" });
//                 }

//                 res.status(200).json({ message: "User updated successfully", updatedUser });
//             } catch (error) {
//                 console.error(error);
//                 res.status(500).json({ message: "Error updating user", error });
//             }
//         }
//         else {
//             console.log("user donot exist")
//         }
//     } catch (error) {
//         res.status(400).json({ error: error });
//     }
// };

module.exports = { getAllUsers, createUser, updateUser, deleteUser, createOrder, createAddress, getAllProducts, loginUser }