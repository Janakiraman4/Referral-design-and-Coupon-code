const express= require('express')
const router= new express.Router()
const app= express()
const adminCCreatiohelper= require('../helper/adminCouponCreation')
app.use(express.json())





router.post('/admin/couponCreation' , adminCCreatiohelper.couponCreation)

module.exports=router