const Razorpay = require("razorpay")
const shortid = require("shortid")

const razorpay = new Razorpay({
    key_id:process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    key_secret:process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET
})

