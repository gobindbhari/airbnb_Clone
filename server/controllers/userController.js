const { default: mongoose } = require("mongoose");
const { User } = require("../models/userModel");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const sceret_key = process.env.JWTSECERET


const signup = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'All field are required' });
        }
        const existUser = User.findOne({ email })
        if (existUser) return res.json({ message: 'User is already have Account' })
        const hashPassword = await bcrypt.hash(password, 10)
        const newuser = await User.create({
            email: email,
            password: hashPassword,
            role: role
        })
        console.log(newuser)
        return res.status(201).json({ message: 'Account successfly created' })

    } catch (error) {
        console.log('error in signup controller please check', error)
        return res.status(400).json({ message: 'Account is not created Please try again' });
    }
}

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'All field are required' });
        }
        const existUser = await User.findOne({ email })
        if (!existUser) return res.status(404).json({ message: 'User have not Account' })
        const { _id, role } = existUser
        const checkPW = await bcrypt.compare(password, existUser.password);
        if (!checkPW) return res.status(400).json({ message: 'Password is invalid Please try again' })
        const payload = {
            "email": email,
            "_id" : _id,
            "role": role
        }
        const token = await jwt.sign(payload, sceret_key, { expiresIn: '1h' })
        return res.status(200).json({ message: 'successfly Sign-in', token })
    } catch (error) {
        console.log('error in signin controller please check', error)
        return res.status(500).json({ message: 'Something went wrong. Please try again later' });
    }
}

const updateUser = async (req,res) => {
    try {
        const { email, password, role } = req.body;
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }
        const existUser = await User.findOne({ email })
        if (!existUser) return res.status(404).json({ message: 'User have not Account' })
            let hashPassword
        if (password) { 
            hashPassword = await bcrypt.hash(password, 10) 
        }
        const newuser = await User.findByIdAndUpdate( existUser._id,{    
            'password': hashPassword ? hashPassword : existUser.password,
            'role': role
        },{new:true})
        console.log(newuser)
        return res.status(200).json({ message: 'Account successfly Updated' })

    } catch (error) {
        console.log('error in updateUser controller please check', error)
        return res.status(400).json({ message: 'Account is not Updated Please try again' });
    }
}


module.exports = { signup, signin, updateUser }