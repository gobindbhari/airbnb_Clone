const mongoose = require('mongoose')

const Database = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/airbnb')
    } catch (error) {
        console.log('DB is not connected Please try again')
    }
}
const db = Database()
module.exports = db