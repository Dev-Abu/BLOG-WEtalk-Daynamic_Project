// post, user, body, replies

const { Schema, model} = require('mongoose')

const CommentSchema = new Schema({
    post: {
     type: Schema.Types.ObjectId,
     ref: 'post',
     required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    body: {
        type: string,
        trim: true,
        required: true
    },
    replies: [
       {
            body: {
                type: 'string',
                required: true
            },
            user: {
                body: Schema.Types.ObjectId,
                ref: 'user',
                required: true
            },
            CreateAt: {
                type: Date,
                default: new Date()
            }
       } 
      
    ]
},{ timeseries: true})

const Comment = model('Comment', CommentSchema)

module.exports = Comment