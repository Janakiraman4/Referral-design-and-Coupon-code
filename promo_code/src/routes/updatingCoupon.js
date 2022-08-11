const express= require('express')
const router= new express.Router()
const app= express()
const couponModal= require('../modal/couponModal')
const userRegisterModal = require('../modal/registerModal')
app.use(express.json())
const updatingCouponHelper= require('../helper/updatingCouponDetails')


router.patch('/admin/updatingCoupon/:id' , updatingCouponHelper.updatingCoupon)

module.exports=router
