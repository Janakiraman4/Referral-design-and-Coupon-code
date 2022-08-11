const express= require('express')
const app= express()
const couponModal= require('../modal/couponModal')
const userRegisterModal = require('../modal/registerModal')
app.use(express.json())



exports.couponCreation = async (body)=>{
    try {
        const isAdmin = await userRegisterModal.findOne({email:body.email , password:body.password})
       if(!isAdmin)throw new Error("Invalid credentials")
       if(isAdmin.role!=='ADMIN') throw new Error('You are not authorized to create token')
       const createdCoupon= new couponModal({couponCode:body.couponCode ,
         applicableCategory:body.applicableCategory , isCouponValid:body.isCouponValid})
        await createdCoupon.save()
        return (createdCoupon)
    } catch (error) {
        return (error.message)
    }
}