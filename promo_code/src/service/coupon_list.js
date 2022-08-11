const express= require('express')
const app= express()
const couponModal= require('../modal/couponModal')
const userRegisterModal = require('../modal/registerModal')
app.use(express.json())



exports.gettingCouponList= async(body)=>{
    try {
        const admin =await userRegisterModal.findOne({email: body.email , password:body.password})
        if(!admin) throw new Error("Invalid credentials") 
        if(admin.role!=="ADMIN") throw new Error("You are not authorized to create token")
        const list= await couponModal.find()
        return(list)
    } catch (error) {
        return(error.message)
    }

}