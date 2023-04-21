const mongoose = require('mongoose');

const dbconnect = async() => {
    try {
        
        await mongoose.connect('mongodb://127.0.0.1:27017/MywaysTask');
        console.log('Mongodb connected successfully');

    } catch (error) {
        console.log(`Error in Connecting to mongoDB ${error}`);
    }
}

module.exports = dbconnect