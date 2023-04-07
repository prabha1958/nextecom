

const Razorpay = require("razorpay")
const shortid = require("shortid")



export default  async function  handler(req,res) {
  
      
    const razorpay = new Razorpay({
        key_id:process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        key_secret:process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET
    })
    
    if(req.method === 'POST'){

        const receipt = shortid.generate()
        const options = {
            receipt:receipt,
            amount:req.body.amount*100,
            currency:"INR",
            
        }

         const porder = await razorpay.orders.create(options)
         
         const response = {
            orderId:porder.id,
            razorpayId:process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount:porder.amount,
            currency:'INR',
            name:req.body.username,
            email:req.body.email,
            mobile:req.body.mobile,
            address:{
                premises:req.body.address.premises,
                area:req.body.address.area,
                street:req.body.address.street,
                city:req.body.address.city,
                state:req.body.address.state,
                pin:req.body.address.pin 
            },
            cartitems:req.body.cartitems,
            description:"payment for cart items"
         }

        res.status(200).json({res:response})
        
    }
   
} 