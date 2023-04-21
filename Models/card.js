const mongoose = require('mongoose');

const MywaysSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true,
    },
    description : {
        type : String,
        require : true,
    },
},{timestamps : true});

module.exports = mongoose.model('Myway', MywaysSchema);