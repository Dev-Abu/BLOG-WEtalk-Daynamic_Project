require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const chalk = require('chalk')

const setMiddleware = require('./middleware/middleware')


const setRoutes = require('./routes/routes')

const MONGODB_URI = `mongodb+srv://${config.get('db-username')}:${config.get('db-password')}
@cluster0.18nptvm.mongodb.net/?retryWrites=true&w=majority`

const app = express()

// setup view engine
app.set('view engine', 'ejs')
app.set('views', 'views')


// Using middleware from middleware Directory
setMiddleware(app)

// Using Routes from route Directory//
setRoutes(app)

app.use((req, res, next) => {
    let error = new Error('404 Page Not Found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    if (error.status === 404) {
        return res.render('pages/error/404',{flashMessage: {} })
    }
    console.log(chalk.red(error.message))
    console.log(error);
    res.render('pages/error/500',{flashMessage: {} })
})


const PORT = process.env.PORT || 9090
mongoose.set('strictQuery', false)
mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true
    })
    .then(() => {
        console.log(chalk.green.inverse('detabase connecte'))
        app.listen(PORT, () => {
            console.log(`suver is running on port ${PORT}`)
        })
        
    })
    .catch(e => {
        return console.log(e);
    })
