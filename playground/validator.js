const router = require('express').Router()
const {check, validationResult} = require('express-validator')
const Flash = require('../utils/Flash')

router.get('/validator', (req, res, next) => {
    
    console.log(Flash.getMessage(req))

    res.render('playground/signup', {title:'Validator playground'})
  
   
})

router.post('/validator',
    [
        check('username')
            .not()
            .isEmpty()
            .withMessage(' user name cant be empty')
            .isLength({max: 15})
            .withMessage('Username cannotbe longer than 15 characters')
            .trim(), // senitizetion, incomming velue modifying
        check('email')
            .isEmail()
            .withMessage(' please provide a valid email address').normalizeEmail(),// senitizetion, incomming velue
        check('password').custom(velue => {
            if (velue.length < 5){
                throw new Error('password must be greater than 5 characters')
            }
            return true
        }),
        check('confirmPassword').custom((velue,{req}) => {
            if (velue !== req.body.password){
                throw new Error('password does not match')
            }
            return true
        })


    ],

    (req, res, next) => {
    let errors = validationResult(req)

        if (!errors.isEmpty()){
            req.flash('fail','There is some error. Please try again')
        } else {
            req.flash('success', 'There is no error')
        }

        res.redirect('/playground/validator')
    })

module.exports = router