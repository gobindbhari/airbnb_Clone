const mongoose = require('mongoose')

const Database = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://harjindersinghnet:cixCxpXyWrBrRQqe@cluster0.pydrb.mongodb.net/airbnb?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Database is successfully connected')
    } catch (error) {
        console.log('DB is not connected Please try again')
    }
}
const db = Database()
module.exports = db