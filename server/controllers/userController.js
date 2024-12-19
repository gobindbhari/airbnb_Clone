const { default: mongoose } = require("mongoose");
const jwt = require('jsonwebtoken');
const User = require("../models/userModel");
const bcrypt = require("bcryptjs")
require('dotenv').config();

const sceret_key = process.env.JWTSECERET


const signup = async (req, res) => {
    try {
        console.log(req.body, "dlksdsla;da")
        const { email, password } = req.body;
        if (!email || !password) {
            console.log('test is passeddddddd')
            return res.status(400).send({ message: 'All field are required' });
        }
        const existUser = await User.findOne({ email: email })
        console.log(existUser, 'existuserrrrrrrrrrrrrr')
        if (existUser) {
            console.log('User is already have Account')
            return res.status(400).json({ message: 'User is already have Account' })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        console.log(hashPassword, '000000000000000000000000')
        const newuser = await User.create({
            email: email,
            password: hashPassword
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
            console.log('All field are required')
            return res.status(400).json({ message: 'All field are required' });
        }
        const existUser = await User.findOne({ email })
        console.log(existUser)
        if (!existUser) return res.status(404).json({ message: 'User have not Account' })
        const { _id } = existUser
        const checkPW = await bcrypt.compare(password, existUser.password);
        if (!checkPW) return res.status(400).json({ message: 'Password is invalid Please try again' })
        const payload = {
            email,
            _id
        }
        const token = await jwt.sign(payload, sceret_key)
        console.log("tokneeee",token)
        return res.status(200)
        .json({ message: 'Successfully Sign-in', user:_id, token})

        // return res.status(200).cookie('authToken',token,{
        //     httpOnly:true,
        //     secure:false,   // true in production
        //     sameSite:'Strict',
        //     maxAge: 7 * 24 * 60 * 60 * 1000
        // }).json({ message: 'Successfully Sign-in', user:_id})   

    } catch (error) {
        console.log('error in signin controller please check', error)
        return res.status(500).json({ message: 'Something went wrong. Please try again later' });
    }
}

const updateUser = async (req, res) => {
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
        const newuser = await User.findByIdAndUpdate(existUser._id, {
            'password': hashPassword ? hashPassword : existUser.password,
            'role': role
        }, { new: true })
        console.log(newuser)
        return res.status(200).json({ message: 'Account successfly Updated' })

    } catch (error) {
        console.log('error in updateUser controller please check', error)
        return res.status(400).json({ message: 'Account is not Updated Please try again' });
    }
}

const getuser = async (req,res) => {
    try {
        const {id} = req.params
        if (!id ) {
            return res.status(400).json({ 
                message: "Id is not given , please provide" 
            });
        }
        const data = await User.findById(id).select('-password -updatedAt -createdAt')
        if (!data) {
            return res.status(404).json({ 
                message: "User not found" 
            });
        }
        // return res.status(200).send(true);
        return res.status(200).send(data);
    } catch (error) {
        console.error("Error in getuser :", error);
        return res.status(500).json({ 
            message: "Error in getuser", 
            error: error.message 
        });
    }
}


module.exports = { signup, signin, updateUser, getuser }