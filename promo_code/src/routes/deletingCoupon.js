const express= require('express')
const router= new express.Router()
const app= express()
const couponModal= require('../modal/couponModal')
const userRegisterModal = require('../modal/registerModal')
app.use(express.json())

router.delete('/admin/deletingCoupon/:id' , async (req,res)=>{
    const isAdmin = await userRegisterModal.findOne({email:req.body.email , password:req.body.password})
    if(!isAdmin) return res.status(400).send({"message": "Invalid credentials"})
    if(isAdmin.role!=='ADMIN') return res.status(402).send('You are not authorized to create token')

    const coupon = await couponModal.findByIdAndRemove({_id:req.params.id})
    res.status(201).send(coupon)
})

router.delete('/admin/deletingAllCoupon' , async(req,res)=>{
    const isAdmin = await userRegisterModal.findOne({email:req.body.email , password:req.body.password})
    if(!isAdmin) return res.status(400).send({"message": "Invalid credentials"})
    if(isAdmin.role!=='ADMIN') return res.status(402).send('You are not authorized to create token')
    const coupons = await couponModal.deleteMany()
    res.status(201).send(coupons)
})

module.exports=router