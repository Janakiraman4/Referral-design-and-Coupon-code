const express= require('express')
const router= new express.Router()
const app= express()
app.use(express.json())
const registerHelper= require('../helper/register')

router.post('/register' , registerHelper.register)


module.exports=router