const {model, Schema} = require('mongoose')

const reciepSchema = new Schema({
    name:String,
    description:String,
    createdAt:String,
    thumbsUp:Number,
    thumbsDown:Number
})

module.exports = model('Reciepe', reciepSchema)