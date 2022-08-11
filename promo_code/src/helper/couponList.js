const express= require('express')
const app= express()
const couponModal= require('../modal/couponModal')
const userRegisterModal = require('../modal/registerModal')
const couponListService= require('../service/coupon_list')
app.use(express.json())



exports.couponList = async (req,res)=>{
   try {
      const isAdmin = await couponListService.gettingCouponList(req.body)
   res.status(201).send(isAdmin)
   } catch (error) {
      res.status(401).send(error)
   }
   
}



