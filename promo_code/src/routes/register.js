const express= require('express')
const router= new express.Router()
const app= express()
const registerModal= require('../modal/register')
require('../db/mongoose')

app.use(express.json())


router.post('/register' , async(req , res)=>{
try {
    const user = new registerModal(req.body)
    if(!user) return res.status(400).send("Given data is invalid")
    
    if(req.query.referrer){
        let findingOne= await registerModal.findOne({referralLink:req.query.referrer})
        if(!findingOne) {
            await user.save()
            return res.status(201).send("Referral count added")
        }
        
        user.wallet=user.wallet+20
        await user.save()            

    const detailsObj={referredPersonId:user.id ,referredPersonUsername:user.username }
       let updatingOne= await registerModal.updateOne({referralLink:req.query.referrer},
        {           
            referredCount:findingOne.referredCount+1,
            wallet:findingOne.wallet+10,
            $push:{peopleReferredByMe:detailsObj}
        })
        await user.save()
       return res.status(201).send(findingOne)
    }

    await user.save()
    res.status(200).send(user)    
} 
    catch (error) {
        res.status(400).send('Invalid requests')
    }})


module.exports=router