import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import Checkout from "./Checkout";


export default function Cart({cartitems,cartClose, deleteItem}) {
  const [total,setTotal] = useState(0)
  const [checkoutOpen,setCheckoutOpen]= useState(false)
   
       useEffect(()=>{
          function go(){
            let abc = []
            cartitems.forEach((item)=>{
               abc.push(item.price)
            })
          
            let sum = 0
            for(let i=0;i<abc.length; i++){
              sum += abc[i]
            }
              setTotal(sum)
          }
          go()
       },[cartitems])


       const handleClick=()=>{
             setCheckoutOpen(true)
       }

       const handleClose = ()=>{
         setCheckoutOpen(false)
       }

       console.log(handleClose)
  
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 opacity-95 flex flex-col items-end justify-center bg-themel1 py-5 px-3 overflow-y-scroll ">
        
         <div className="flex1 w-1/3 bg-slate-300 opacity-100  min-h-screen px-10">
             <div className=" mt-20">
                <div className="w-full text-right">
                    <p onClick={()=>cartClose()} className="cursor-pointer mx-3">Close</p>
                   
                </div>
                <div className="w-full mt-4">
                <div className="w-full text-center text-xl font-bold text-themed4">Cart Items</div>
                    {cartitems.length >0 && cartitems.map((item,index)=>(
                      <CartItem key={index} cartitems={item} sno={index+1} deleteItem={deleteItem} />
                    )) }
                  
                </div>
                 {total>0 && <div className="w-full text-center mt-4 "> <span className="text-sm font-normal text-gray-700">Total amount</span>&nbsp;&nbsp;<span className="text-xl font-extrabold text-themed4">{total}</span></div>}  
                {cartitems.length <1 && (
                    <div className="flex items-center justify-center">
                        <img src="http://localhost:3000/emptycart.png" className=" w-40 h-40" />
                        <p>Your cart is empty</p>
                    </div>
                  )}
               
                    <div className="w-full text-center mt-5">
                        <button onClick={handleClick} className="px-3 py-2 bg-green-700 text-white text-xl font-bold rounded-lg cursor-pointer">CHECKOUT</button>
                    </div>

             </div>
            
         </div>
         {checkoutOpen && <Checkout handleClose={handleClose} cartitems={cartitems} deleteItem={deleteItem} total={total}/>}
    </div>
  )
}
