const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    images: [{
        type: String,
        // default:'https://img.freepik.com/free-photo/empire-state-building-seen-from-apartment_23-2150897639.jpg?t=st=1733895365~exp=1733898965~hmac=2dc6875f72e62732e7bacfeaa4b1633c774706e2688330427a64776684140f0a&w=360'
        // required: true
    }],
    description: {
        type: String,
        required: true
    },
    hostedBy: {
        type:  mongoose.Schema.Types.ObjectId, 
        ref: 'User' ,
        // required: true
    },
    pricePerNight: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum:["Icons", "Cabins", "Country Sides", "Icons", "National Parks", "Farms", "Amazing Pools", "Amazing Views", "Rooms", "Tree Houses", "Luxe", "Beach", "Historical Homes", "Mansions", "Domes", "Castles", "Lake Front", "Tiny Houses", "Beach Fronts", "Lakes", "Islands", "Design", "Off-the-Grid", "Top of the World", "Bed And Breakfasts", "Tropical", "Trending", "Top Cities", "Camping", "Desert", "Caves", "Golfing", "A-Frames", "Arctics", "Containers", "Earth Homes", "Boats", "Creative Spaces", "Chefs Kitchens", "Skiing", "Play", "New", "Surfing", "Houseboats", "Minsus", "Ski In/Out", "Yurts"]

    },
    availableDates: {
        startDate: { type: Date, default: Date.now },
        endDate: { type: Date, default: null },
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
            type: Number,
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