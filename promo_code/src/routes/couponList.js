const express= require('express')
const router= new express.Router()
const app= express()
const couponModal= require('../modal/couponModal')
const userRegisterModal = require('../modal/registerModal')
app.use(express.json())

 /**
 * @swagger
 * definitions:
 *   configureVatAndFollowUp:
 *     type: object
 *     properties:
 *       doctorId:
 *         type: string
 *       doctorStatus:
 *         type: string
 *         enum:
 *           - active
 *           - rejected
 */


  /**
 * @swagger
 * definitions:
 *   ProviderLogin:
 *     type: object
 *     required:
 *       - login
 *       - password
 *     properties:
 *       login:
 *         type: string
 *       password:
 *         type: string
 */
router.get('/admin/couponList' , async(req,res)=>{
   const isAdmin = await userRegisterModal.findOne({email:req.body.email , password:req.body.password})
   if(!isAdmin) return res.status(400).send({"message": "Invalid credentials"})
   if(isAdmin.role!=='ADMIN') return res.status(402).send('You are not authorized to create token')
   const list=   await couponModal.find()
   res.status(201).send(list)
})




module.exports=router


// "couponList":{
//    "properties": {
//      "couponCode": {
//        "type": "string"
//      },
//       "discountOff": {
//        "type": "string"
//      },
//      "applicableCategory": {
//        "type": "string"
//      },
//      "isCouponValid": {
//        "type": "string"
//      }
//    }
//  },