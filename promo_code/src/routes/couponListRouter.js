const express= require('express')
const router= new express.Router()
const app= express()
app.use(express.json())
const cListHelper= require('../helper/couponList')


router.get('/admin/couponList' , cListHelper.couponList)



module.exports=router