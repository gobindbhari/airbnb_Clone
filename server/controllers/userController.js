const { User } = require("../models/userModel")
const bcrypt = require('bcrypt');



const signup = async (req,res) => {
    try {
        const {email,password} = req.body
        if(!email || !password)res.status(400).json({message : 'All fields are required try again'})
        const existUser = User.findOne({email})
        if(existUser)  res.status(400).json({ message: 'User already exists with this email' });
        const hashText = password
        const hashPW = await bcrypt.hash
        
        (hashText, 10);
        const data =  await User.create({
            email,hashPW
        })
        return res.status(201).json({
            message: 'Account successfully created',
            user: {
                id: data._id,
                email: data.email,
            }
        });
    } catch (error) {
        console.log('error in signup controller', error);
        return res.status(400).json({message: 'Account is not created try again'})  
    }    
}

const signin = async (req,res) => {
    try {
        const {email,password} = req.body
        if(!email || !password)res.status(400).json({message : 'All fields are required try again'})
        const existUser = User.findOne({email})
        if(!existUser)res.status(401).json({message : 'Invalid Email'})
        const checkPW = await bcrypt.compare
        // const {password} = existUser
        
    } catch (error) {
        console.log('error in signin controller', error);
        return res.status(400).json({message: 'Account is not Sign-In Please try again'})
    }    
}

module.exports = {signup, signin,}