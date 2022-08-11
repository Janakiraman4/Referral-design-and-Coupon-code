const express= require('express')
const router= new express.Router()
const app= express()
const couponModal= require('../modal/couponModal')
const userRegisterModal = require('../modal/registerModal')
app.use(express.json())


exports.applyingCoupon =async(req,res)=>{
    try {
        const applyingCoupon = await applyingCouponService.apply(req.body)
        res.status(201).send(applyingCoupon)
    } catch (error) {
        res.status(401).send(error)
    }
}



