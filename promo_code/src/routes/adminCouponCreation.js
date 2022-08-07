const express= require('express')
const router= new express.Router()
const app= express()
const couponModal= require('../modal/couponModal')
const userRegisterModal = require('../modal/registerModal')
app.use(express.json())


router.post('/admin/couponCreation' , async (req,res)=>{

   const isAdmin = await userRegisterModal.findOne({email:req.body.email , password:req.body.password})
   if(!isAdmin) return res.status(400).send({"message": "Invalid credentials"})
   if(isAdmin.role!=='ADMIN') return res.status(402).send('You are not authorized to create token')
   const createdCoupon= new couponModal({couponCode:req.body.couponCode ,
     applicableCategory:req.body.applicableCategory , isCouponValid:req.body.isCouponValid})
    await createdCoupon.save()
    res.status(200).send(createdCoupon)
})


module.exports=router

