const { default: mongoose } = require("mongoose");
const User = require("../models/userModel");
const Post = require("../models/postModel");


const createPost = async (req,res) => {
    try {
        console.log(req.body)
        const {id} = req.params
        const { title, description, pricePerNight, availableDates, propertyDetails, address, category } = req.body;
            const {bedrooms,bathrooms,guests,beds,kitchen} = propertyDetails
            const {pincode,country,street,state,town,district} = address
            const {startDate,endDate} = availableDates
        if (!title || !description || !pricePerNight || !category) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const user = await User.findById(id)
        if (!user) {
            console.log( 'User not found')
            return res.status(404).json({ message: 'User not found' });
        }
        // console.log(req.files, '==========')
        // console.log(req.file, '00000000000==========')
        // console.log(req, '------------------------------00000000000==========')
        // const imagePaths = req.files.map(file => file.path);
        const newPost = await Post.create({
            title,
            // images:imagePaths,
            // images:req.file.path,
            description,
            pricePerNight,
            availableDates,
            propertyDetails: {
                bedrooms,bathrooms,guests,beds,kitchen
            },
            address: {
               pincode,country,street,state,town,district
            },
            category,
            hostedBy:id,
            availableDates: {
                startDate,
                endDate,
            },
        });
        console.log(newPost)
        return res.status(201).json({ message: 'Post successfully created', post: newPost });
    } catch (error) {
        console.error('Error creating post:', error);
        return res.status(500).json({ message: 'Error in createPost postcontroller, please try again later',error }); 
    }    
}


const getAllPost = async (req,res) => {
    try {
        console.log("tetssss")
        const data = await Post.find()
        // console.log(data,"rvaan")
        return res.send(data)
    } catch (error) {
        return res.status(500).json({ message: 'Error in getAllPost postcontroller, please try again later',error }); 
    }    
}

const postById = async (req,res) => {
    try {
        const {id}= req.params
        const data = await Post.findById(id).populate('hostedBy', '-password')
        return res.send(data)
    } catch (error) {
        return res.status(500).json({ message: 'Error in postById postcontroller, please try again later',error });   
    }    
}


module.exports = {createPost, getAllPost, postById}