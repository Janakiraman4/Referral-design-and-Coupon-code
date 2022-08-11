const express= require('express')
const router= new express.Router()
const app= express()
const couponModal= require('../modal/couponModal')
const userRegisterModal = require('../modal/registerModal')
app.use(express.json())


router.patch('/admin/updatingCoupon/:id' , async (req , res)=>{

    const isAdmin = await userRegisterModal.findOne({email:req.body.email , password:req.body.password})
    if(!isAdmin) return res.status(400).send({"message": "Invalid credentials"})
    if(isAdmin.role!=='ADMIN') return res.status(402).send('You are not authorized to create token')
   const updatingCoupon= await couponModal.findByIdAndUpdate({_id:req.params.id} , 
    {
        isValid:req.body.validity,
        applicableCategory:req.body.category,
        discountOff:req.body.discount || 5    
    },{new:true})
    console.log(updatingCoupon)
    res.status(201).send(updatingCoupon)
})

module.exports=router