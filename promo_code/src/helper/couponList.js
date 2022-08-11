const express= require('express')
const app= express()
const couponModal= require('../modal/couponModal')
const userRegisterModal = require('../modal/registerModal')
const couponListService= require('../service/coupon_list')
app.use(express.json())


// router.get('/admin/couponList' , async(req,res)=>{
//    const isAdmin = await userRegisterModal.findOne({email:req.body.email , password:req.body.password})
//    if(!isAdmin) return res.status(400).send({"message": "Invalid credentials"})
//    if(isAdmin.role!=='ADMIN') return res.status(402).send('You are not authorized to create token')
//    const list=   await couponModal.find()
//    res.status(201).send(list)
// })


exports.couponList = async (req,res)=>{
   try {
      const isAdmin = await couponListService.gettingCouponList(req.body)
   res.status(201).send(isAdmin)
   } catch (error) {
      res.status(401).send(error)
   }
   
}



// module.exports=router

