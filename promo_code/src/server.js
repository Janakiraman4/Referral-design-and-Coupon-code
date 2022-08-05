const express= require('express')
const app= express()
const port = process.env.PORT || 3000;
app.use(express.json())
require('dotenv/config')
require('./db/mongoose')
const registerRoute= require('./routes/register')


app.use(registerRoute)


app.listen(port ,()=>{
    console.log('Runnin')
})

