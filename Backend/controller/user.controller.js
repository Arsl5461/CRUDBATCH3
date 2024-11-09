const User = require("../models/user.model")

exports.store = async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.json({ message: "User created successfully", success: true, status: 201, user })
    }
    catch (err) {
        console.log(err)
    }
}

exports.index = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 })
        return res.json({ message: "Users fetched successfully", success: true, status: 200, users })
    }
    catch (err) {
        console.log(err)
    }
}

exports.get = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({ _id: id })
        if (!user) {
            return res.json({ message: "User not found", success: false, status: 404 })
        }
        return res.json({ message: "User fetcehd successfully", success: true, status: 200, user })
    }
    catch (err) {
        console.log(err)
    }
}

exports.destroy = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOneAndDelete({ _id: id });
        if (!user) {
            return res.json({ message: "User not found", status: 404, success: false })
        }
        return res.json({ message: "User deleted successfully", success: true, status: 200 })
    }
    catch (err) {
        console.log(err)
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOneAndUpdate({ _id: id }, req.body, { new: true })
        if (!user) {
            return res.json({ message: "User not found", status: 404, success: false })
        }
        return res.json({ message: "User Updated Successfully", success: true, status: 201, user })
    }
    catch (err) {
        console.log(err)
    }
}