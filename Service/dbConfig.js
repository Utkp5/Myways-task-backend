require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const dbconnect = async() => {
    try {
        
        await mongoose.connect(process.env.MONGODB);
        console.log('Mongodb connected successfully');

    } catch (error) {
        console.log(`Error in Connecting to mongoDB ${error}`);
    }
}

module.exports = dbconnect