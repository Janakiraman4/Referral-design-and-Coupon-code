const express= require('express')
const router= new express.Router()
const app= express()

const userApplyingCoupon= require('../helper/applyingCoupon')
app.use(express.json())




router.get('/user/Apply_Coupon' , userApplyingCoupon.applyingCoupon)


module.exports=router