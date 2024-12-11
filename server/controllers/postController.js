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
        if (!title || !description || !pricePerNight || !id || !category) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // const imagePaths = req.files.map(file => file.path);
        const newPost = await Post.create({
            title,
            images:req.file,
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
        return res.status(201).json({ message: 'Post successfully created', post: newPost });
    } catch (error) {
        console.error('Error creating post:', error);
        return res.status(500).json({ message: 'Error in createPost postcontroller, please try again later',error }); 
    }    
}


const getAllPost = async (req,res) => {
    try {
        const data = await Post.find()
        return res.send(data)
    } catch (error) {
        
    }    
}

const postById = async (req,res) => {
    try {
        const {id}= req.params
        const data = await Post.findById(id)
        return res.send(data)
    } catch (error) {
        
    }    
}


module.exports = {createPost, getAllPost, postById}