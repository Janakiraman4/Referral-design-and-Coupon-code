const mongoose= require('mongoose')
const jwt = require('jsonwebtoken')

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
    role:{
        type:String,
        required:true,
        default:'BASIC'
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

// schema.methods.generateJWT = async function () { 
//     const user = this
//     const token = jwt.sign({ id: user._id.toString() , role:user.role}, 'auth')
//     const decrypt= jwt.verify(token , 'auth')
//     user.tokens = user.tokens.concat({ token })
//     console.log(token,decrypt)
//     await user.save()
//     return {token , decrypt}
// }


const registerModal = mongoose.model('Register' , schema)


module.exports=registerModal


// ,
//     tokens:[{
//         token:{
//             type:String,
//             required:true
//         }
//     }]