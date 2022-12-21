// user, title, bio, profilepics, links{fb, twi, git etc}, posts, bookmarks

const { Schema } = require("mongoose");

const profileSchema = new Schema({
    user: {
        type: String,
        ref: 'User',
    },
    name:{
        name:String,
        required: true,
        trim: true,
        maxlength: 30
    },
    title: {
        type: String,
        trim: true,
        maxlength: 100
    },
    bio: {
        type: String,
        trim: true,
        maxlength: 500
    },
    profilePic: String,
    links: {
        website: String,
        facebook: String,
        twitter: String,
        github: String
    },
    post:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    bookmarks:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
},{timeseries: true})

const Profile = model('Profile', profileSchema)
module.exports = Profile