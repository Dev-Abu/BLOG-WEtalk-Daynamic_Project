// name, Email , password and profile

const {Schema, model} = require( 'mongoose')


const userSchema = new Schema({
    username: {
        type: String,
        maxlength: 15,
        required: true
    },
    email:{
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        require: true
    },

    profile:{
        type: Schema.Types.ObjectId,
        ref: 'profile'
    }
})

const User = model('User', userSchema)
module.exports = User