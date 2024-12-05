const mongoose = require('mongoose')

const Database = async ()=>{
    try {
        await mongoose.connect('')
    } catch (error) {
        console.log('DB is not connected Please try again')
    }
}
const db = Database()
module.exports = db