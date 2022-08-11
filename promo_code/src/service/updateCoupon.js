const express= require('express')
const app= express()
const couponModal= require('../modal/couponModal')
const userRegisterModal = require('../modal/registerModal')
app.use(express.json())


exports.updating=async(req)=>{
    try {
        const isAdmin = await userRegisterModal.findOne({email:req.body.email , password:req.body.password})
            if(!isAdmin) throw new Error( "Invalid credentials")
            if(isAdmin.role!=='ADMIN') throw new Error('You are not authorized to create token')
           const updatingCoupon= await couponModal.findByIdAndUpdate({_id:req.params.id} , 
            {
                isValid:req.body.validity,
                applicableCategory:req.body.category,
                discountOff:req.body.discount || 5    
            },{new:true})
            console.log(updatingCoupon)
            return(updatingCoupon)
    } catch (error) {
        return (error.message)
    }
}
