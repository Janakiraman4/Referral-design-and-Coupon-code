const mongoose= require('mongoose')

const schema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    referralLink:{
        type:String,
        default:''
    },
    referredCount:{
        type:Number,
        default:0
    },
    wallet:{
        type:Number,
        default:0
    },
    createdDate:{
        type:Date,
         required: true,
         default: Date.now
    },
    updatedDate:{
        type:Date,
        required: true,
        default: Date.now
    },
    
    peopleReferredByMe:[{
        referredPersonId:{
            type:String
        },
        referredPersonUsername:{
            type:String
        }
    }]
})

schema.pre("save" , async function(next){
    const user = this
    const posibility='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let generatedNumber=''
    let usernameId=user.username.slice(0,4)
    for(let i=0;i<4;i++){
        generatedNumber+=posibility[Math.floor(Math.random()*posibility.length)]
    }
    user.referralLink=usernameId+generatedNumber
    next()
})

const registerModal = mongoose.model('Register' , schema)


module.exports=registerModal