const express= require('express')
const app= express()
const couponModal= require('../modal/couponModal')
const userRegisterModal = require('../modal/registerModal')
app.use(express.json())


exports.deletingCoupon = async(req)=>{
    try {
        const isAdmin = await userRegisterModal.findOne({email:req.body.email , password:req.body.password})
            if(!isAdmin) throw new Error("Invalid credentials")
            if(isAdmin.role!=='ADMIN')  throw new Error('You are not authorized to create token')
        
            const coupon = await couponModal.findByIdAndRemove({_id:req.params.id})
            return(coupon)
    } catch (error) {
        return(error.message)
    }
}

exports.deleteAllCoupon = async(req)=>{
    try {
        const isAdmin = await userRegisterModal.findOne({email:req.body.email , password:req.body.password})
    if(!isAdmin)  throw new Error( "Invalid credentials")
    if(isAdmin.role!=='ADMIN')  throw new Error('You are not authorized to create token')
    const coupons = await couponModal.deleteMany()
    return(coupons)
    } catch (error) {
        return(error.message)
    }
}





