const express = require('express')
const app = express()
const newsRouter = require('./routers/news')


app.use(express.static('data/uploads'))
app.use(express.static('public'))
app.use('/api',newsRouter) 


app.listen(3000, () => {
    console.log('port 3000 is listening');
})
