const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    images: [{
        type: String,
        // required: true
    }],
    description: {
        type: String,
        required: true
    },
    hostedBy: {
        type:  mongoose.Schema.Types.ObjectId, 
        ref: 'User' ,
        required: true
    },
    pricePerNight: {
        type: Number,
        required: true
    },
    availableDates: {
        startDate:Date,
        endDate:Date,
    },
    propertyDetails: {
        bedrooms: {
            type: Number,
            required: true
        },
        bathrooms: {
            type: Number,
            required: true
        },
        guests: {
            type: Number,
            required: true
        },
        beds: {
            type: Number,
            required: true
        },
        kitchen: {
            type: Number,
            required: true
        }
    },
    address: {
        pincode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        town: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        }
    }
})

const Post = mongoose.model('Post',PostSchema)

module.exports = Post