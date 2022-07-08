const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    image: [{
        image_path: { 
            type: String 
        },
    }],
})


const Image = mongoose.model('image_moudle', userSchema)

module.exports = { Image }