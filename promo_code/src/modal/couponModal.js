const mongoose= require('mongoose')


const couponSchema = new mongoose.Schema({
    couponCode:{
        type:String,
        required:true
    },
    discountOff:{
        type:Number,
        required:true,
        default:5   
    },
    applicableCategory:{
        type:String,
        required:true
    },
    isCouponValid:{
        type:Boolean,
        required:true,
        default:true
    },
    expiryDate:{
        type:Date,
        default: +new Date() + 30*24*60*60*1000
    },
    createdDate:{
        type:Date,
         required: true,
         default: Date.now
    }
})


const couponModal = mongoose.model("Coupon" , couponSchema)




module.exports=couponModal