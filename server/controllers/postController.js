const { default: mongoose } = require("mongoose");
const User = require("../models/userModel");
const Post = require("../models/postModel");


const createPost = async (req,res) => {
    try {
        const { title, description, pricePerNight, availableDates, propertyDetails, address, hostedBy } = req.body;
        if (!title || !description || !pricePerNight || !propertyDetails || !address || !hostedBy) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const user = await User.findById(hostedBy)
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const imagePaths = req.files.map(file => file.path);
        const newPost = new Post.create({
            title,
            images:imagePaths,
            description,
            pricePerNight,
            availableDates,
            propertyDetails,
            address,
            hostedBy,
        },{
            new:true
        });
        return res.status(201).json({ message: 'Post successfully created', post: newPost });
    } catch (error) {
        console.error('Error creating post:', error);
        return res.status(500).json({ message: 'Error in createPost postcontroller, please try again later' }); 
    }    
}


module.exports = {createPost}