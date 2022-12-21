const {body} = require('express-validator')
const User = require('../../models/User')

module.exports = [
    body('username')
        .isLength({min: 3, max: 15}).withMessage('Username must be between 3 to 15 chars')
        .custom(async username => {
            let user = await User.findOne({username})
            if (user) {
                return Promise.reject('Username already exists')
            }
        }).trim(),

    body('email')
        .isEmail().withMessage('please enter a valid email address')
        
        .custom(async email => {
            let user = await User.findOne({email})
            if (user) {
                return Promise.reject('Email already exists')
            } 
        }).normalizeEmail(),

    body('password')
        .isLength({min: 6 }).withMessage('Password must be at least 6 chars'),

    body('confirmPassword')
    .custom((confirmPassword,{req}) => {
        if (confirmPassword !== req.body.password) {
            throw new Error('Password does not match')
        }
        return true
    })
]