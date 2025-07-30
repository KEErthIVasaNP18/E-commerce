const mongoose = require('mongoose')

const cartItemSchema = new mongoose.Schema({
    PostId:{
        type: mongoose.Schema.Types.ObjectId, ref:'Eposts'
    },
    Quantity:{
        type: Number, default:1
    }
})

module.exports = mongoose.model('CartItem', cartItemSchema)